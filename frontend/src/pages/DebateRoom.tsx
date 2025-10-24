import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const DebateRoom = () => {
  const [argument, setArgument] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data
  const debateTopic = "Should AI development be regulated by governments?";
  const timeRemaining = "12:45";
  const yourSide = "For";

  const debateArguments = {
    for: [
      {
        id: 1,
        text: "Government regulation ensures AI development aligns with societal values and prevents harmful applications. We've seen this work with nuclear technology and pharmaceuticals.",
        timestamp: "2 min ago",
      },
      {
        id: 2,
        text: "Without oversight, AI could exacerbate inequalities and concentrate power in the hands of a few tech companies. Democratic regulation protects the public interest.",
        timestamp: "5 min ago",
      },
    ],
    against: [
      {
        id: 3,
        text: "Heavy regulation would stifle innovation and push AI development underground or to countries with fewer restrictions, making it harder to ensure safety.",
        timestamp: "3 min ago",
      },
      {
        id: 4,
        text: "The technology is evolving too rapidly for traditional regulatory frameworks. Industry self-regulation with clear ethical guidelines is more practical and adaptive.",
        timestamp: "6 min ago",
      },
    ],
  };

  const handleSubmit = () => {
    if (!argument.trim()) {
      toast.error("Please write your argument");
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast.success("Argument submitted successfully!", {
        description: "Your opponent will respond shortly.",
      });
      setArgument("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                DebateAI
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-warning animate-glow-pulse" />
                <span className="text-lg font-semibold">{timeRemaining}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Debate Header */}
      <section className="border-b border-border bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2 animate-fade-in">
            <h1 className="text-3xl font-bold">{debateTopic}</h1>
            <p className="text-muted-foreground">
              You are arguing <span className="text-success font-semibold">{yourSide}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Debate Room - Two Column Layout */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* For Side */}
          <Card className="shadow-elegant animate-fade-in">
            <CardHeader className="bg-success/10 border-b border-border">
              <CardTitle className="text-success flex items-center justify-between">
                <span>For Regulation</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {debateArguments.for.length} arguments
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
              {debateArguments.for.map((arg) => (
                <div
                  key={arg.id}
                  className="p-4 bg-muted/50 rounded-lg border border-border hover:border-success/50 transition-colors"
                >
                  <p className="text-foreground mb-2">{arg.text}</p>
                  <p className="text-xs text-muted-foreground">{arg.timestamp}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Against Side */}
          <Card className="shadow-elegant animate-fade-in [animation-delay:0.1s]">
            <CardHeader className="bg-destructive/10 border-b border-border">
              <CardTitle className="text-destructive flex items-center justify-between">
                <span>Against Regulation</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {debateArguments.against.length} arguments
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
              {debateArguments.against.map((arg) => (
                <div
                  key={arg.id}
                  className="p-4 bg-muted/50 rounded-lg border border-border hover:border-destructive/50 transition-colors"
                >
                  <p className="text-foreground mb-2">{arg.text}</p>
                  <p className="text-xs text-muted-foreground">{arg.timestamp}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Argument Input */}
        <div className="max-w-7xl mx-auto mt-8 animate-fade-in [animation-delay:0.2s]">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Your Argument</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Craft your argument here... Be clear, logical, and respectful."
                value={argument}
                onChange={(e) => setArgument(e.target.value)}
                className="min-h-[120px] resize-none"
              />
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  {argument.length} / 500 characters
                </p>
                <Button
                  variant="accent"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !argument.trim()}
                  className="gap-2"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Submitting..." : "Submit Argument"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DebateRoom;
