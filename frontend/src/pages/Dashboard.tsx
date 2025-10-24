import { Button } from "@/components/ui/button";
import { DebateCard } from "@/components/DebateCard";
import { Brain, Plus, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data - in real app would come from backend
  const activeDebates = [
    {
      id: 1,
      title: "The Future of AI Regulation",
      topic: "Should AI development be regulated by governments?",
      status: "active" as const,
      participants: 2,
      timeRemaining: "15 min",
    },
    {
      id: 2,
      title: "Climate Policy Approaches",
      topic: "Carbon tax vs. cap-and-trade systems",
      status: "active" as const,
      participants: 2,
      timeRemaining: "32 min",
    },
  ];

  const pendingInvitations = [
    {
      id: 3,
      title: "Universal Basic Income",
      topic: "Is UBI a viable economic policy?",
      status: "pending" as const,
      participants: 1,
    },
  ];

  const completedDebates = [
    {
      id: 4,
      title: "Space Exploration Priorities",
      topic: "Should we prioritize Mars colonization?",
      status: "completed" as const,
      participants: 2,
    },
    {
      id: 5,
      title: "Education Technology",
      topic: "Digital vs. traditional learning methods",
      status: "completed" as const,
      participants: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                DebateAI
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost">
                <TrendingUp className="h-4 w-4" />
                Stats
              </Button>
              <Button variant="accent">
                <Plus className="h-4 w-4" />
                New Debate
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Welcome Section */}
        <section className="animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Debater</h1>
          <p className="text-xl text-muted-foreground">
            Your intellectual gym awaits. What will you challenge today?
          </p>
        </section>

        {/* Active Debates */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Active Debates</h2>
            <span className="text-sm text-muted-foreground">{activeDebates.length} ongoing</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {activeDebates.map((debate) => (
              <DebateCard
                key={debate.id}
                title={debate.title}
                topic={debate.topic}
                status={debate.status}
                participants={debate.participants}
                timeRemaining={debate.timeRemaining}
                onJoin={() => console.log("Join debate", debate.id)}
                onView={() => console.log("View debate", debate.id)}
              />
            ))}
          </div>
        </section>

        {/* Pending Invitations */}
        {pendingInvitations.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Pending Invitations</h2>
              <span className="text-sm text-muted-foreground">
                {pendingInvitations.length} waiting
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pendingInvitations.map((debate) => (
                <DebateCard
                  key={debate.id}
                  title={debate.title}
                  topic={debate.topic}
                  status={debate.status}
                  participants={debate.participants}
                  onJoin={() => console.log("Accept invitation", debate.id)}
                  onView={() => console.log("View invitation", debate.id)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Past Debates */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Past Debates</h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {completedDebates.map((debate) => (
              <DebateCard
                key={debate.id}
                title={debate.title}
                topic={debate.topic}
                status={debate.status}
                participants={debate.participants}
                onView={() => console.log("View results", debate.id)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
