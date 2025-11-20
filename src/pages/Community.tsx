import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Community = () => {
  // Mock discussion data
  const discussions = [
    {
      id: 1,
      author: "Alex Rivera",
      avatar: "AR",
      title: "Best Budget Routes in Southeast Asia?",
      category: "Tips & Advice",
      excerpt: "Planning a 3-month trip and looking for affordable bus routes that offer great experiences...",
      replies: 28,
      views: 456,
      lastActive: "2 hours ago",
      trending: true,
    },
    {
      id: 2,
      author: "Emma Chen",
      avatar: "EC",
      title: "Safety Tips for Solo Female Travelers",
      category: "Safety",
      excerpt: "Sharing my experiences and tips after traveling solo through Latin America for 6 months...",
      replies: 42,
      views: 892,
      lastActive: "5 hours ago",
      trending: true,
    },
    {
      id: 3,
      author: "James Wilson",
      avatar: "JW",
      title: "Night Bus Survival Guide",
      category: "Travel Hacks",
      excerpt: "Essential items and tips to make overnight bus journeys more comfortable and safe...",
      replies: 35,
      views: 623,
      lastActive: "1 day ago",
      trending: false,
    },
    {
      id: 4,
      author: "Sofia Martinez",
      avatar: "SM",
      title: "Most Scenic Bus Routes in Europe",
      category: "Routes",
      excerpt: "A comprehensive guide to the most beautiful bus journeys across European countries...",
      replies: 54,
      views: 1240,
      lastActive: "3 hours ago",
      trending: true,
    },
    {
      id: 5,
      author: "David Park",
      avatar: "DP",
      title: "Meeting Locals: My Best Experiences",
      category: "Stories",
      excerpt: "How bus travel helped me connect with amazing people and learn about different cultures...",
      replies: 19,
      views: 334,
      lastActive: "6 hours ago",
      trending: false,
    },
  ];

  const categories = [
    { name: "Tips & Advice", count: 234, color: "bg-blue-100 text-blue-700" },
    { name: "Safety", count: 156, color: "bg-green-100 text-green-700" },
    { name: "Routes", count: 189, color: "bg-purple-100 text-purple-700" },
    { name: "Travel Hacks", count: 203, color: "bg-orange-100 text-orange-700" },
    { name: "Stories", count: 421, color: "bg-pink-100 text-pink-700" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Community Forum
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join discussions, share advice, and connect with fellow bus travelers.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <h3 className="font-bold text-lg">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors flex items-center justify-between"
                  >
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="secondary" className={category.color}>
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Button className="w-full bg-sky-gradient">
              Start Discussion
            </Button>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-sky-gradient text-white">
                          {discussion.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{discussion.author}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {discussion.lastActive}
                        </p>
                      </div>
                    </div>
                    {discussion.trending && (
                      <Badge className="bg-secondary">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {discussion.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {discussion.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{discussion.category}</Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {discussion.replies} replies
                      </span>
                      <span>{discussion.views} views</span>
                    </div>
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

export default Community;
