
import React, { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchIcon, Heart, MessageSquare, Share2, Send, Plus, User, Users, BookOpen, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CommunityPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [commentText, setCommentText] = useState("");
  const { toast } = useToast();

  const handleLike = () => {
    toast({
      title: "Post Liked",
      description: "You've shown support for this post.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share Options",
      description: "Share options would appear here in the full version.",
    });
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    toast({
      title: "Comment Added",
      description: "Your comment has been posted.",
    });
    
    setCommentText("");
  };

  const handleCreatePost = () => {
    toast({
      title: "Create Post",
      description: "Post creation form would open here in the full version.",
    });
  };

  const handleJoinGroup = (groupName: string) => {
    toast({
      title: `Joined ${groupName}`,
      description: "You've successfully joined this group.",
    });
  };

  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah J.",
        avatar: "",
        isAnonymous: false
      },
      time: "2 hours ago",
      content: "I just had my first prenatal checkup today! Feeling excited and nervous at the same time. Any advice from experienced moms?",
      likes: 24,
      comments: 8,
      group: "Pregnancy Support"
    },
    {
      id: 2,
      author: {
        name: "Anonymous",
        avatar: "",
        isAnonymous: true
      },
      time: "Yesterday",
      content: "I've been experiencing harassment at my workplace but I'm afraid to report it. Has anyone dealt with a similar situation?",
      likes: 32,
      comments: 15,
      group: "Workplace Safety"
    },
    {
      id: 3,
      author: {
        name: "Dr. Lisa Patel",
        avatar: "",
        isAnonymous: false,
        isVerified: true
      },
      time: "3 days ago",
      content: "Important reminder: Regular health checkups during pregnancy are essential. Don't skip your appointments, even if you feel fine!",
      likes: 87,
      comments: 12,
      group: "Health Advice"
    }
  ];

  const groups = [
    {
      id: 1,
      name: "Pregnancy Support",
      members: 1240,
      posts: 56,
      isJoined: true
    },
    {
      id: 2,
      name: "Tech Women",
      members: 985,
      posts: 32,
      isJoined: false
    },
    {
      id: 3,
      name: "University Safety",
      members: 1850,
      posts: 78,
      isJoined: false
    },
    {
      id: 4,
      name: "Healing & Recovery",
      members: 735,
      posts: 41,
      isJoined: true
    },
    {
      id: 5,
      name: "Workplace Safety",
      members: 1120,
      posts: 63,
      isJoined: false
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Legal Aid for Domestic Violence Survivors",
      organization: "Women's Legal Aid",
      type: "Resource Guide"
    },
    {
      id: 2,
      title: "24/7 Crisis Hotline",
      organization: "National Support Network",
      type: "Emergency Contact"
    },
    {
      id: 3,
      title: "Finding Support After Trauma",
      organization: "Healing Together",
      type: "Support Guide"
    }
  ];

  return (
    <MobileLayout>
      <div className="mobile-container">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-zeb-purple">Community</h1>
            <p className="text-muted-foreground">
              Connect, share, and support each other
            </p>
          </div>
          <Button
            size="sm"
            onClick={handleCreatePost}
            className="bg-zeb-purple hover:bg-zeb-darkPurple"
          >
            <Plus className="h-4 w-4 mr-1" />
            Post
          </Button>
        </header>

        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search communities and posts..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="feed" className="mb-6">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="feed">
              <BookOpen className="h-4 w-4 mr-2" />
              Feed
            </TabsTrigger>
            <TabsTrigger value="groups">
              <Users className="h-4 w-4 mr-2" />
              Groups
            </TabsTrigger>
            <TabsTrigger value="support">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="mt-4">
            <ScrollArea className="h-[calc(100vh-240px)]">
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3 mb-3">
                        <Avatar>
                          {post.author.isAnonymous ? (
                            <User className="h-6 w-6" />
                          ) : (
                            <div className="bg-zeb-purple text-white h-full w-full flex items-center justify-center">
                              {post.author.name.charAt(0)}
                            </div>
                          )}
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <p className="font-medium">{post.author.name}</p>
                            {post.author.isVerified && (
                              <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-600 hover:bg-blue-50">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <span>{post.time}</span>
                            <span className="mx-1">•</span>
                            <span className="text-zeb-purple">{post.group}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm mb-4">{post.content}</p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1" onClick={handleLike}>
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </button>
                        </div>
                        <button onClick={handleShare}>
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-4 pt-0 border-t">
                      <form onSubmit={handleComment} className="flex w-full space-x-2">
                        <Input
                          placeholder="Write a comment..."
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          className="flex-1"
                        />
                        <Button size="sm" type="submit" className="bg-zeb-purple">
                          <Send className="h-4 w-4" />
                        </Button>
                      </form>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="groups" className="mt-4">
            <ScrollArea className="h-[calc(100vh-240px)]">
              <div className="space-y-3">
                {groups.map((group) => (
                  <Card key={group.id} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium mb-1">{group.name}</h3>
                          <div className="flex items-center text-xs text-muted-foreground space-x-2">
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              <span>{group.members.toLocaleString()} members</span>
                            </div>
                            <span>•</span>
                            <span>{group.posts} posts this week</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant={group.isJoined ? "outline" : "default"}
                          onClick={() => handleJoinGroup(group.name)}
                          className={group.isJoined ? "text-zeb-purple border-zeb-purple" : "bg-zeb-purple"}
                        >
                          {group.isJoined ? "Joined" : "Join"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="support" className="mt-4">
            <Card className="mb-4 bg-zeb-purple text-white">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">24/7 Support Resources</h3>
                <p className="text-sm mb-3">
                  Connect with trained professionals who can provide guidance and support.
                </p>
                <Button className="w-full bg-white text-zeb-purple hover:bg-white/90">
                  Contact Support Hotline
                </Button>
              </CardContent>
            </Card>
            
            <h3 className="font-medium mb-2 text-zeb-purple">Resources & Guidance</h3>
            <ScrollArea className="h-[calc(100vh-320px)]">
              <div className="space-y-3">
                {resources.map((resource) => (
                  <Card key={resource.id} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-1">
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zeb-pink/10 text-zeb-pink">
                              {resource.type}
                            </span>
                          </div>
                          <h3 className="font-medium text-sm mb-1">{resource.title}</h3>
                          <p className="text-xs text-muted-foreground">{resource.organization}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
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
const ChevronRight: React.FC<{ className?: string }> = ({ className }) => (
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
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default CommunityPage;
