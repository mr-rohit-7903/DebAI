import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

interface DebateCardProps {
  title: string;
  topic: string;
  status: "active" | "pending" | "completed";
  participants: number;
  timeRemaining?: string;
  onJoin?: () => void;
  onView?: () => void;
}

export const DebateCard = ({
  title,
  topic,
  status,
  participants,
  timeRemaining,
  onJoin,
  onView,
}: DebateCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "completed":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-fade-in">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <Badge className={getStatusColor()}>{status}</Badge>
        </div>
        <CardDescription className="text-muted-foreground mt-2">{topic}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{participants} participants</span>
          </div>
          {timeRemaining && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{timeRemaining}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        {status === "active" && onJoin && (
          <Button variant="accent" onClick={onJoin} className="flex-1">
            Join Debate
          </Button>
        )}
        {onView && (
          <Button variant="outline" onClick={onView} className="flex-1">
            {status === "completed" ? "View Results" : "View Details"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
