
import React, { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Settings, 
  Camera, 
  Edit, 
  UserPlus, 
  LogOut, 
  Moon, 
  Eye, 
  Bell, 
  Phone, 
  MapPin, 
  Shield, 
  Database 
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface EmergencyContact {
  id: number;
  name: string;
  phone: string;
}

const ProfilePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [locationSharing, setLocationSharing] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [dataSaver, setDataSaver] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState<"public" | "friends" | "private">("friends");
  const { toast } = useToast();
  
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([
    { id: 1, name: "Jane Smith", phone: "+1 (555) 123-4567" },
    { id: 2, name: "John Doe", phone: "+1 (555) 987-6543" },
    { id: 3, name: "Sarah Johnson", phone: "+1 (555) 456-7890" }
  ]);

  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Profile editing would open here in the full version.",
    });
  };

  const handleEditContacts = () => {
    toast({
      title: "Edit Emergency Contacts",
      description: "Emergency contacts editing would open here in the full version.",
    });
  };

  const handleToggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    toast({
      title: `Dark Mode ${checked ? "Enabled" : "Disabled"}`,
      description: `The app theme has been set to ${checked ? "dark" : "light"} mode.`,
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logging Out",
      description: "You are being signed out of your account.",
    });
    // In a real app, we would implement actual logout functionality here
    // For demo purposes, we'll redirect to login after a short delay
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <MobileLayout>
      <div className="mobile-container">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-zeb-purple">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </header>

        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <Avatar className="h-24 w-24 border-4 border-white shadow-md">
              <div className="bg-zeb-purple text-white h-full w-full flex items-center justify-center text-3xl">
                M
              </div>
            </Avatar>
            <button className="absolute bottom-0 right-0 h-8 w-8 bg-zeb-pink text-white rounded-full flex items-center justify-center shadow-md">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          
          <h2 className="text-xl font-bold">Maria Johnson</h2>
          <p className="text-muted-foreground text-sm">@maria_j</p>
          <p className="text-sm mt-1 italic">"Embracing each day with strength and hope"</p>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-3 text-zeb-purple border-zeb-purple"
            onClick={handleEditProfile}
          >
            <Edit className="h-4 w-4 mr-1" />
            Edit Profile
          </Button>
        </div>

        <Tabs defaultValue="account" className="mb-6">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="account">
              <User className="h-4 w-4 mr-2" />
              Account
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-4">
            <ScrollArea className="h-[calc(100vh-350px)]">
              <Card className="mb-4">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-zeb-purple flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Emergency Contacts
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={handleEditContacts}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {emergencyContacts.map((contact) => (
                      <div key={contact.id} className="flex items-center p-2 bg-gray-50 rounded-md">
                        <div className="h-8 w-8 rounded-full bg-zeb-pink/10 flex items-center justify-center mr-3">
                          <UserPlus className="h-4 w-4 text-zeb-pink" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{contact.name}</p>
                          <p className="text-xs text-muted-foreground">{contact.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h3 className="font-medium text-zeb-purple flex items-center mb-3">
                    <Eye className="h-4 w-4 mr-2" />
                    Profile Visibility
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="visibility-public" className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          id="visibility-public" 
                          checked={profileVisibility === "public"} 
                          onChange={() => setProfileVisibility("public")}
                          className="sr-only"
                        />
                        <div className={`h-4 w-4 rounded-full border ${profileVisibility === "public" ? "bg-zeb-purple border-zeb-purple" : "border-gray-300"}`}>
                          {profileVisibility === "public" && (
                            <div className="h-2 w-2 rounded-full bg-white m-1"></div>
                          )}
                        </div>
                        <span>Public</span>
                      </Label>
                      <span className="text-xs text-muted-foreground">Visible to everyone</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="visibility-friends" className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          id="visibility-friends" 
                          checked={profileVisibility === "friends"} 
                          onChange={() => setProfileVisibility("friends")}
                          className="sr-only"
                        />
                        <div className={`h-4 w-4 rounded-full border ${profileVisibility === "friends" ? "bg-zeb-purple border-zeb-purple" : "border-gray-300"}`}>
                          {profileVisibility === "friends" && (
                            <div className="h-2 w-2 rounded-full bg-white m-1"></div>
                          )}
                        </div>
                        <span>Friends Only</span>
                      </Label>
                      <span className="text-xs text-muted-foreground">Only visible to friends</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="visibility-private" className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          id="visibility-private" 
                          checked={profileVisibility === "private"} 
                          onChange={() => setProfileVisibility("private")}
                          className="sr-only"
                        />
                        <div className={`h-4 w-4 rounded-full border ${profileVisibility === "private" ? "bg-zeb-purple border-zeb-purple" : "border-gray-300"}`}>
                          {profileVisibility === "private" && (
                            <div className="h-2 w-2 rounded-full bg-white m-1"></div>
                          )}
                        </div>
                        <span>Private</span>
                      </Label>
                      <span className="text-xs text-muted-foreground">Only visible to you</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h3 className="font-medium text-zeb-purple mb-3">Account Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="location-sharing" className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>Location Sharing</span>
                      </Label>
                      <Switch
                        id="location-sharing"
                        checked={locationSharing}
                        onCheckedChange={setLocationSharing}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-notifications" className="flex items-center space-x-2">
                        <Bell className="h-4 w-4" />
                        <span>Push Notifications</span>
                      </Label>
                      <Switch
                        id="push-notifications"
                        checked={pushNotifications}
                        onCheckedChange={setPushNotifications}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="settings" className="mt-4">
            <ScrollArea className="h-[calc(100vh-350px)]">
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h3 className="font-medium text-zeb-purple mb-3">App Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dark-mode" className="flex items-center space-x-2">
                        <Moon className="h-4 w-4" />
                        <span>Dark Mode</span>
                      </Label>
                      <Switch
                        id="dark-mode"
                        checked={isDarkMode}
                        onCheckedChange={handleToggleDarkMode}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="data-saver" className="flex items-center space-x-2">
                        <Database className="h-4 w-4" />
                        <span>Data Saver</span>
                      </Label>
                      <Switch
                        id="data-saver"
                        checked={dataSaver}
                        onCheckedChange={setDataSaver}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h3 className="font-medium text-zeb-purple mb-3">Privacy & Security</h3>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start h-10 font-normal">
                      <Shield className="h-4 w-4 mr-2" />
                      Privacy Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-10 font-normal">
                      <User className="h-4 w-4 mr-2" />
                      Account Security
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-10 font-normal">
                      <Phone className="h-4 w-4 mr-2" />
                      Two-Factor Authentication
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h3 className="font-medium text-zeb-purple mb-3">About</h3>
                  
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">App Version</span>
                      <span>1.0.0</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Terms of Service</span>
                      <button className="text-zeb-purple">View</button>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Privacy Policy</span>
                      <button className="text-zeb-purple">View</button>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Help & Support</span>
                      <button className="text-zeb-purple">Contact</button>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default ProfilePage;
