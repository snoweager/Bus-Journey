import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Stories = () => {
  // Mock data - will be replaced with real data from database
  const stories = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "SJ",
      location: "Route 66, USA",
      title: "An Epic Cross-Country Adventure",
      excerpt: "My 3-week journey across America's most iconic highway taught me that the journey truly is the destination...",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
      likes: 245,
      comments: 32,
      tags: ["Adventure", "USA", "Long Distance"],
    },
    {
      id: 2,
      author: "Miguel Santos",
      avatar: "MS",
      location: "Patagonia, Chile",
      title: "Through the Andes Mountains",
      excerpt: "The winding roads of Patagonia offer some of the most breathtaking views I've ever experienced from a bus window...",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
      likes: 189,
      comments: 24,
      tags: ["Mountains", "Chile", "Scenic"],
    },
    {
      id: 3,
      author: "Priya Patel",
      avatar: "PP",
      location: "Kerala, India",
      title: "Monsoon Magic in South India",
      excerpt: "Traveling through Kerala during monsoon season was magical. The green landscapes and friendly locals made it unforgettable...",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      likes: 312,
      comments: 45,
      tags: ["India", "Monsoon", "Culture"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Travel Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers. Get inspired for your next bus journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-primary">
                    {story.location}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar>
                    <AvatarFallback className="bg-sky-gradient text-white">
                      {story.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">{story.author}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {story.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-muted-foreground">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <Heart className="h-5 w-5" />
                    <span>{story.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span>{story.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;
