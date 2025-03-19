
import React, { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock, MapPin, File, Mic, Send } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const ReportPage: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!incidentType || !date || !location || !description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would send the report to the backend
    toast({
      title: "Report Submitted",
      description: "Thank you for your report. Your information has been received.",
    });
    
    // Reset form
    setIncidentType("");
    setDate(new Date());
    setTime("");
    setLocation("");
    setDescription("");
  };

  const handleLocationDetect = () => {
    // Mock location detection
    setLocation("Current location being detected...");
    
    setTimeout(() => {
      setLocation("123 Main Street, City, Country");
      toast({
        title: "Location Detected",
        description: "Your current location has been added to the report.",
      });
    }, 1500);
  };

  const handleUploadFile = () => {
    setIsUploading(true);
    
    // Mock file upload
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "File Uploaded",
        description: "Evidence has been attached to your report.",
      });
    }, 1500);
  };

  const handleVoiceRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      toast({
        title: "Recording Stopped",
        description: "Voice recording has been attached to your report.",
      });
    } else {
      setIsRecording(true);
      toast({
        title: "Recording Started",
        description: "Recording your voice description...",
      });
    }
  };

  return (
    <MobileLayout>
      <div className="mobile-container">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-zeb-purple">Report an Incident</h1>
          <p className="text-muted-foreground">
            Your report will be kept confidential and secure
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="incident-type">Type of Incident</Label>
            <Select value={incidentType} onValueChange={setIncidentType}>
              <SelectTrigger id="incident-type">
                <SelectValue placeholder="Select incident type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="harassment">Harassment</SelectItem>
                <SelectItem value="assault">Assault</SelectItem>
                <SelectItem value="domestic-violence">Domestic Violence</SelectItem>
                <SelectItem value="discrimination">Discrimination</SelectItem>
                <SelectItem value="unsafe-conditions">Unsafe Conditions</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="time"
                  type="time"
                  className="pl-10"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="Enter location or use current location"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleLocationDetect}
                className="flex-shrink-0"
              >
                <MapPin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe what happened in as much detail as you feel comfortable sharing"
              className="min-h-32"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Evidence (Optional)</Label>
            <div className="flex space-x-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleUploadFile}
                disabled={isUploading}
              >
                <File className="mr-2 h-4 w-4" />
                {isUploading ? "Uploading..." : "Upload Photo"}
              </Button>
              <Button
                type="button"
                variant={isRecording ? "default" : "outline"}
                className={`flex-1 ${isRecording ? "bg-red-500 hover:bg-red-600" : ""}`}
                onClick={handleVoiceRecording}
              >
                <Mic className="mr-2 h-4 w-4" />
                {isRecording ? "Stop Recording" : "Voice Input"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Files and recordings will be encrypted and stored securely.
            </p>
          </div>

          <Button type="submit" className="w-full bg-zeb-purple hover:bg-zeb-darkPurple">
            <Send className="mr-2 h-4 w-4" />
            Submit Report
          </Button>
        </form>
      </div>
    </MobileLayout>
  );
};

export default ReportPage;
