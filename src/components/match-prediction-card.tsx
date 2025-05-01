import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Trophy, TrendingUp, TrendingDown } from "lucide-react"; // Example icons

interface MatchPredictionCardProps {
  team1: string;
  team1Logo?: string; // Optional: URL for team 1 logo
  team2: string;
  team2Logo?: string; // Optional: URL for team 2 logo
  predictedWinner: string;
  confidence?: number; // Optional: Confidence level (0-100)
  keyFactors: string[];
  date: string;
  venue: string;
}

export function MatchPredictionCard({
  team1,
  team1Logo = "https://picsum.photos/40/40", // Default placeholder
  team2,
  team2Logo = "https://picsum.photos/40/40", // Default placeholder
  predictedWinner,
  confidence,
  keyFactors,
  date,
  venue,
}: MatchPredictionCardProps) {
  const isTeam1PredictedWinner = team1 === predictedWinner;
  const isTeam2PredictedWinner = team2 === predictedWinner;

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-center">
          <span>{team1} vs {team2}</span>
          <span className="text-xs font-normal text-muted-foreground">{date}</span>
        </CardTitle>
        <CardDescription>{venue}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around items-center mb-4">
          <div className="flex flex-col items-center text-center">
            <img
                src={team1Logo}
                alt={`${team1} Logo`}
                className="w-10 h-10 mb-1 rounded-full object-cover"
                data-ai-hint={`${team1} cricket logo`}
             />
            <span className="font-medium">{team1}</span>
             {isTeam1PredictedWinner && <Trophy className="w-4 h-4 text-accent mt-1" />}
          </div>
          <span className="text-muted-foreground font-bold text-xl">vs</span>
          <div className="flex flex-col items-center text-center">
            <img
                src={team2Logo}
                alt={`${team2} Logo`}
                className="w-10 h-10 mb-1 rounded-full object-cover"
                data-ai-hint={`${team2} cricket logo`}
             />
            <span className="font-medium">{team2}</span>
            {isTeam2PredictedWinner && <Trophy className="w-4 h-4 text-accent mt-1" />}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Prediction</h4>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="font-medium">{predictedWinner} to win</span>
            {confidence && (
              <Badge variant={confidence > 70 ? "default" : "secondary"} className="ml-auto bg-primary text-primary-foreground">
                {confidence}% Confidence
              </Badge>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Key Factors</h4>
          <div className="flex flex-wrap gap-1">
            {keyFactors.map((factor, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {factor}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
