import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CreateStory = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Story creation logic will be added with Supabase
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Share Your Story
            </h1>
            <p className="text-xl text-muted-foreground">
              Inspire others with your bus travel experience
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tell us about your journey</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Story Title</Label>
                  <Input 
                    id="title"
                    placeholder="An unforgettable journey through..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location/Route</Label>
                  <Input 
                    id="location"
                    placeholder="e.g., Route 66, USA"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="story">Your Story</Label>
                  <Textarea 
                    id="story"
                    placeholder="Share the details of your journey, what made it special, tips for others..."
                    className="min-h-[200px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input 
                    id="tags"
                    placeholder="Adventure, Solo Travel, Budget (comma separated)"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Photos</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload photos or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        PNG, JPG up to 10MB
                      </p>
                    </label>
                  </div>

                  {images.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={image} 
                            alt={`Upload ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-sky-gradient">
                    Publish Story
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateStory;
