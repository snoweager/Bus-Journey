import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-sky-gradient rounded-lg group-hover:scale-110 transition-transform">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BusJourney
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost" className="font-medium">
                Home
              </Button>
            </Link>
            <Link to="/stories">
              <Button variant="ghost" className="font-medium">
                Stories
              </Button>
            </Link>
            <Link to="/community">
              <Button variant="ghost" className="font-medium">
                Community
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" className="font-medium">
                Profile
              </Button>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/create-story">
              <Button className="bg-sky-gradient hover:opacity-90 transition-opacity">
                Share Story
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link to="/stories" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Stories
              </Button>
            </Link>
            <Link to="/community" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Community
              </Button>
            </Link>
            <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Profile
              </Button>
            </Link>
            <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link to="/create-story" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-sky-gradient">
                Share Story
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
