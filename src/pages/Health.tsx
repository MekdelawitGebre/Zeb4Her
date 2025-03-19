
import React, { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Calendar, MapPin, MessageSquare, ChevronRight, BookOpen, Video, Hospital, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HealthPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleChatbotOpen = () => {
    toast({
      title: "Health Assistant",
      description: "Our health chat assistant is being prepared. This feature will be available in the premium version.",
    });
  };

  const articles = [
    {
      id: 1,
      title: "Prenatal Nutrition: What to Eat During Pregnancy",
      category: "Prenatal",
      readTime: "5 min read",
      isPremium: false
    },
    {
      id: 2,
      title: "Understanding Postnatal Depression",
      category: "Postnatal",
      readTime: "8 min read",
      isPremium: false
    },
    {
      id: 3,
      title: "First Trimester: What to Expect",
      category: "Prenatal",
      readTime: "6 min read",
      isPremium: false
    },
    {
      id: 4,
      title: "Breastfeeding Tips for New Mothers",
      category: "Postnatal",
      readTime: "7 min read",
      isPremium: true
    },
    {
      id: 5,
      title: "Managing Morning Sickness",
      category: "Prenatal",
      readTime: "4 min read",
      isPremium: false
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Pregnancy Yoga for Beginners",
      duration: "15 min",
      isPremium: false
    },
    {
      id: 2,
      title: "Understanding Contractions",
      duration: "8 min",
      isPremium: false
    },
    {
      id: 3,
      title: "Newborn Care Basics",
      duration: "20 min",
      isPremium: true
    }
  ];

  const clinics = [
    {
      id: 1,
      name: "Women's Health Center",
      distance: "2.3 miles",
      rating: 4.8
    },
    {
      id: 2,
      name: "City Maternity Hospital",
      distance: "5.1 miles",
      rating: 4.5
    },
    {
      id: 3,
      name: "Community Health Clinic",
      distance: "1.7 miles",
      rating: 4.2
    }
  ];

  return (
    <MobileLayout>
      <div className="mobile-container">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-zeb-purple">Maternal Health Hub</h1>
          <p className="text-muted-foreground">
            Resources and support for your journey
          </p>
        </header>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for health topics..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Card className="bg-zeb-purple text-white mb-6 overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium mb-1">Health Assistant</h3>
                  <p className="text-sm text-white/80 mb-3">
                    Have questions about your pregnancy or health?
                  </p>
                </div>
                <MessageSquare className="h-6 w-6 opacity-70" />
              </div>
              <Button 
                onClick={handleChatbotOpen} 
                className="w-full bg-white text-zeb-purple hover:bg-white/90"
              >
                Chat with Health Assistant
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="articles" className="mb-6">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="articles">
              <BookOpen className="h-4 w-4 mr-2" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="videos">
              <Video className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="clinics">
              <Hospital className="h-4 w-4 mr-2" />
              Clinics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles" className="mt-4">
            <ScrollArea className="h-80">
              <div className="space-y-3">
                {articles.map((article) => (
                  <Card key={article.id} className="card-hover">
                    <CardContent className="p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-1">
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zeb-purple/10 text-zeb-purple">
                              {article.category}
                            </span>
                            {article.isPremium && (
                              <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-zeb-pink/10 text-zeb-pink">
                                Premium
                              </span>
                            )}
                          </div>
                          <h3 className="font-medium text-sm mb-1">{article.title}</h3>
                          <p className="text-xs text-muted-foreground">{article.readTime}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-4">
            <ScrollArea className="h-80">
              <div className="space-y-3">
                {videos.map((video) => (
                  <Card key={video.id} className="card-hover overflow-hidden">
                    <div className="relative h-32 bg-gray-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-zeb-purple/90 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium text-sm">{video.title}</h3>
                          <p className="text-xs text-muted-foreground">{video.duration}</p>
                        </div>
                        {video.isPremium && (
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zeb-pink/10 text-zeb-pink">
                            Premium
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="clinics" className="mt-4">
            <ScrollArea className="h-80">
              <div className="space-y-3">
                {clinics.map((clinic) => (
                  <Card key={clinic.id} className="card-hover">
                    <CardContent className="p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium mb-1">{clinic.name}</h3>
                          <div className="flex items-center text-xs text-muted-foreground mb-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{clinic.distance}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 mr-1" />
                            <span className="text-xs">{clinic.rating}</span>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" variant="outline" className="text-xs">
                            <Calendar className="h-3 w-3 mr-1" />
                            Book
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            Directions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

// Component to avoid a React error
const Play: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export default HealthPage;
