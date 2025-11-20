import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Camera, MessageSquare, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bus-journey.jpg";

const Index = () => {
  const features = [
    {
      icon: Camera,
      title: "Share Your Journey",
      description: "Capture and share your bus travel stories with stunning photos and memorable moments.",
    },
    {
      icon: MessageSquare,
      title: "Connect & Discuss",
      description: "Join discussions, share tips, and connect with fellow bus travelers from around the world.",
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Be part of a vibrant community passionate about exploring the world by bus.",
    },
    {
      icon: TrendingUp,
      title: "Discover Routes",
      description: "Explore popular routes, hidden gems, and travel recommendations from experienced travelers.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Travelers" },
    { number: "25K+", label: "Stories Shared" },
    { number: "150+", label: "Countries" },
    { number: "500+", label: "Active Discussions" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Share Your Bus Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up opacity-90">
            Connect with travelers worldwide. Share stories, tips, and unforgettable experiences from the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/stories">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Explore Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/create-story">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-8">
                Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Join Our Community?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              BusJourney is more than a platform—it's a movement of travelers sharing the magic of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-sky-gradient rounded-lg w-fit group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Share Your Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of travelers documenting their bus journeys and inspiring others to explore.
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
