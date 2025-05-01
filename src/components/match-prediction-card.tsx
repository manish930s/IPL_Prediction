
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Trophy } from "lucide-react";
import Image from 'next/image'; // Use next/image for optimization

interface MatchPredictionCardProps {
  team1: string;
  team1Logo?: string;
  team2: string;
  team2Logo?: string;
  predictedWinner: string;
  confidence?: number;
  keyFactors: string[];
  date: string; // Expecting pre-formatted date string (e.g., "May 3, 2025")
  venue: string;
}

export function MatchPredictionCard({
  team1,
  team1Logo = "https://picsum.photos/seed/default-team1-logo/40/40", // Default placeholder with hint
  team2,
  team2Logo = "https://picsum.photos/seed/default-team2-logo/40/40", // Default placeholder with hint
  predictedWinner,
  confidence,
  keyFactors,
  date, // Now expects formatted date
  venue,
}: MatchPredictionCardProps) {
  const isTeam1PredictedWinner = team1 === predictedWinner;
  const isTeam2PredictedWinner = team2 === predictedWinner;

  // Helper function to generate AI hint based on team name
  const getAiHint = (teamName: string): string => {
    // Create a simple keyword hint from the team name
    const hint = teamName
      .toLowerCase()
      .replace(/royal challengers/g, 'rcb') // Abbreviate long names
      .replace(/chennai super kings/g, 'csk')
      .replace(/kolkata knight riders/g, 'kkr')
      .replace(/rajasthan royals/g, 'rr')
      .replace(/punjab kings/g, 'pbks')
      .replace(/lucknow super giants/g, 'lsg')
      .replace(/sunrisers hyderabad/g, 'srh')
      .replace(/delhi capitals/g, 'dc')
      .replace(/mumbai indians/g, 'mi')
      .replace(/gujarat titans/g, 'gt')
      .split(' ')[0]; // Take first word if abbreviation fails
    return `${hint} ipl logo`; // Add context
  };


  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-center">
          <span className="truncate flex-1 mr-2">{team1} vs {team2}</span>
          {/* Display the pre-formatted date */}
          <span className="text-xs font-normal text-muted-foreground flex-shrink-0">{date}</span>
        </CardTitle>
        <CardDescription className="truncate">{venue}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="flex justify-around items-start mb-4 text-center">
          <div className="flex flex-col items-center w-1/3">
             {/* Use next/image and add data-ai-hint */}
             <Image
                src={team1Logo}
                alt={`${team1} Logo`}
                width={40}
                height={40}
                className="mb-1 rounded-full object-contain bg-gray-200" // Added background for potentially transparent logos
                data-ai-hint={getAiHint(team1)} // Add AI hint
             />
            <span className="font-medium text-sm break-words">{team1}</span>
             {isTeam1PredictedWinner && <Trophy className="w-4 h-4 text-accent mt-1 flex-shrink-0" aria-label="Predicted Winner"/>}
          </div>
          <span className="text-muted-foreground font-bold text-xl pt-4">vs</span>
          <div className="flex flex-col items-center w-1/3">
             {/* Use next/image and add data-ai-hint */}
             <Image
                src={team2Logo}
                alt={`${team2} Logo`}
                width={40}
                height={40}
                className="mb-1 rounded-full object-contain bg-gray-200" // Added background for potentially transparent logos
                data-ai-hint={getAiHint(team2)} // Add AI hint
             />
            <span className="font-medium text-sm break-words">{team2}</span>
            {isTeam2PredictedWinner && <Trophy className="w-4 h-4 text-accent mt-1 flex-shrink-0" aria-label="Predicted Winner"/>}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Prediction</h4>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="font-medium truncate flex-1">{predictedWinner} to win</span>
            {confidence !== undefined && (
              <Badge variant={confidence > 70 ? "default" : "secondary"} className="ml-auto bg-primary text-primary-foreground flex-shrink-0">
                {confidence}% Conf.
              </Badge>
            )}
             {/* Show TBC badge for playoff matches */}
            {predictedWinner === "TBC" && confidence === undefined && (
               <Badge variant="outline" className="ml-auto flex-shrink-0">
                 TBC
               </Badge>
            )}
          </div>
        </div>

        <div className="mt-auto">
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
