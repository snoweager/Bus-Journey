import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, MessageSquare, Heart, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  // Mock user data
  const user = {
    name: "Travel Enthusiast",
    username: "@traveler2025",
    avatar: "TE",
    bio: "Passionate about exploring the world one bus route at a time. Sharing stories and tips from my adventures.",
    joinedDate: "January 2024",
    stats: {
      stories: 12,
      followers: 1234,
      following: 567,
      likes: 3456,
    },
  };

  const userStories = [
    {
      id: 1,
      title: "Coastal Highway Adventure",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400",
      likes: 234,
      comments: 18,
    },
    {
      id: 2,
      title: "Mountain Pass Journey",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400",
      likes: 189,
      comments: 12,
    },
    {
      id: 3,
      title: "Desert Route Experience",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400",
      likes: 312,
      comments: 24,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-32 w-32">
                <AvatarFallback className="bg-sky-gradient text-white text-4xl">
                  {user.avatar}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
                    <p className="text-muted-foreground">{user.username}</p>
                  </div>
                  <Button className="mt-4 md:mt-0">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {user.bio}
                </p>

                <div className="flex items-center justify-center md:justify-start text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Member since {user.joinedDate}</span>
                </div>

                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.stats.stories}</div>
                    <div className="text-sm text-muted-foreground">Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.stats.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.stats.following}</div>
                    <div className="text-sm text-muted-foreground">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.stats.likes}</div>
                    <div className="text-sm text-muted-foreground">Total Likes</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Stories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">My Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-3 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {story.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {story.comments}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
