import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-debate.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                DebateAI
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline">Sign In</Button>
              <Button variant="accent">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Modern{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Intellectual Gym
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Engage in structured, AI-powered debates. Sharpen your arguments, challenge your
              thinking, and grow through intelligent discourse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="accent" className="text-lg px-8">
                <Zap className="h-5 w-5" />
                Start Your First Debate
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose DebateAI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A sophisticated platform designed for meaningful intellectual exchange
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">AI-Powered Judging</h3>
              <p className="text-muted-foreground">
                Get unbiased, intelligent feedback on your arguments from our advanced AI judge
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in [animation-delay:0.1s]">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Structured Discourse</h3>
              <p className="text-muted-foreground">
                Clear rules and time limits ensure productive, focused conversations
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in [animation-delay:0.2s]">
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Track Your Growth</h3>
              <p className="text-muted-foreground">
                Monitor your performance and improve your argumentation skills over time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-hero p-12 rounded-2xl shadow-elegant">
            <h2 className="text-4xl font-bold text-primary-foreground">
              Ready to Challenge Your Mind?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of thinkers engaging in meaningful debates every day
            </p>
            <Button size="lg" variant="accent" className="text-lg px-8">
              Create Your Account
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">DebateAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 DebateAI. Empowering intellectual discourse.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
