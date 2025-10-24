import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Award, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Verdict = () => {
  // Mock verdict data
  const verdict = {
    winner: "For Regulation",
    yourSide: "For Regulation",
    scores: {
      for: 87,
      against: 72,
    },
    criteria: [
      { name: "Logical Consistency", forScore: 92, againstScore: 78 },
      { name: "Evidence Quality", forScore: 85, againstScore: 70 },
      { name: "Rebuttal Strength", forScore: 88, againstScore: 68 },
      { name: "Clarity", forScore: 84, againstScore: 72 },
    ],
    aiReasoning:
      "The 'For Regulation' side presented a more compelling case with stronger evidence and clearer logical structure. Key arguments about democratic oversight and preventing power concentration were well-developed and effectively defended against rebuttals. The 'Against' side raised valid concerns about innovation and regulatory speed, but failed to adequately address the fundamental question of accountability in AI development.",
    topArgument: {
      side: "For",
      text: "Without oversight, AI could exacerbate inequalities and concentrate power in the hands of a few tech companies. Democratic regulation protects the public interest.",
    },
  };

  const isWinner = verdict.winner === verdict.yourSide;

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
            <Button variant="ghost" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-5xl space-y-8">
        {/* Victory/Result Banner */}
        <div
          className={`text-center py-12 px-6 rounded-2xl shadow-glow animate-fade-in ${
            isWinner ? "bg-gradient-accent" : "bg-gradient-hero"
          }`}
        >
          <Award className="h-16 w-16 mx-auto mb-4 text-white animate-scale-in" />
          <h1 className="text-4xl font-bold text-white mb-2">
            {isWinner ? "Congratulations!" : "Debate Complete"}
          </h1>
          <p className="text-xl text-white/90">
            {isWinner
              ? "You won this debate with a compelling performance"
              : "A well-fought debate. Review the insights below."}
          </p>
        </div>

        {/* Overall Scores */}
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in [animation-delay:0.1s]">
          <Card className="shadow-elegant border-2 border-success/20">
            <CardHeader className="bg-success/10">
              <CardTitle className="flex items-center justify-between">
                <span className="text-success">For Regulation</span>
                <Badge className="bg-success text-success-foreground">{verdict.scores.for}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-success transition-all duration-1000 ease-out"
                  style={{ width: `${verdict.scores.for}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-2 border-muted">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center justify-between">
                <span className="text-muted-foreground">Against Regulation</span>
                <Badge className="bg-muted text-muted-foreground">{verdict.scores.against}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-muted-foreground transition-all duration-1000 ease-out"
                  style={{ width: `${verdict.scores.against}%` }}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Criteria Scores */}
        <Card className="shadow-elegant animate-fade-in [animation-delay:0.2s]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Performance Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {verdict.criteria.map((criterion, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{criterion.name}</span>
                  <div className="flex gap-4">
                    <span className="text-success font-semibold">{criterion.forScore}</span>
                    <span className="text-muted-foreground">{criterion.againstScore}</span>
                  </div>
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 h-full bg-success transition-all duration-1000 ease-out"
                    style={{
                      width: `${(criterion.forScore / (criterion.forScore + criterion.againstScore)) * 100}%`,
                    }}
                  />
                  <div
                    className="absolute right-0 h-full bg-muted-foreground/50 transition-all duration-1000 ease-out"
                    style={{
                      width: `${(criterion.againstScore / (criterion.forScore + criterion.againstScore)) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Judge Reasoning */}
        <Card className="shadow-elegant animate-fade-in [animation-delay:0.3s]">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary animate-brain-pulse" />
              AI Judge's Reasoning
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">{verdict.aiReasoning}</p>
          </CardContent>
        </Card>

        {/* Top Argument */}
        <Card className="shadow-elegant animate-fade-in [animation-delay:0.4s]">
          <CardHeader className="bg-accent/5">
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Most Compelling Argument
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <Badge className="bg-success text-success-foreground mb-3">
                {verdict.topArgument.side} Regulation
              </Badge>
              <p className="text-foreground">{verdict.topArgument.text}</p>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in [animation-delay:0.5s]">
          <Button variant="accent" size="lg" asChild>
            <Link to="/dashboard">Start Another Debate</Link>
          </Button>
          <Button variant="outline" size="lg">
            Share Results
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Verdict;
