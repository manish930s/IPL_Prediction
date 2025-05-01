import { Header } from "@/components/header";
import { MatchPredictionCard } from "@/components/match-prediction-card";
import { PlayerPerformanceChart } from "@/components/player-performance-chart";
import { AIInsightSection } from "@/components/ai-insight-section";
import { Separator } from "@/components/ui/separator";

// Hypothetical IPL 2025 Schedule Data
// NOTE: The official IPL 2025 schedule has not been released.
// This data is purely hypothetical for demonstration purposes.
// PredictedWinner, confidence, keyFactors, logos are placeholders.
const upcomingMatches = [
  {
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    predictedWinner: "Mumbai Indians", // Placeholder
    confidence: 68, // Placeholder
    keyFactors: ["Home Advantage (Wankhede)", "CSK Experience", "Key Player Matchups"], // Placeholder
    date: "March 22, 2025",
    venue: "Wankhede Stadium, Mumbai",
    team1Logo: "https://picsum.photos/seed/mi2025/40/40",
    team2Logo: "https://picsum.photos/seed/csk2025/40/40",
  },
  {
    team1: "Kolkata Knight Riders",
    team2: "Royal Challengers Bengaluru",
    predictedWinner: "Kolkata Knight Riders", // Placeholder
    confidence: 65, // Placeholder
    keyFactors: ["KKR Spin Attack", "RCB Batting Power", "Eden Gardens Pitch"], // Placeholder
    date: "March 23, 2025",
    venue: "Eden Gardens, Kolkata",
    team1Logo: "https://picsum.photos/seed/kkr2025/40/40",
    team2Logo: "https://picsum.photos/seed/rcb2025/40/40",
  },
   {
    team1: "Rajasthan Royals",
    team2: "Delhi Capitals",
    predictedWinner: "Rajasthan Royals", // Placeholder
    confidence: 70, // Placeholder
    keyFactors: ["RR Balanced Squad", "DC Young Talent", "Sawai Mansingh Conditions"], // Placeholder
    date: "March 24, 2025",
    venue: "Sawai Mansingh Stadium, Jaipur",
    team1Logo: "https://picsum.photos/seed/rr2025/40/40",
    team2Logo: "https://picsum.photos/seed/dc2025/40/40",
  },
   {
    team1: "Sunrisers Hyderabad",
    team2: "Punjab Kings",
    predictedWinner: "Sunrisers Hyderabad", // Placeholder
    confidence: 62, // Placeholder
    keyFactors: ["SRH Aggressive Batting", "PBKS Pace Attack", "Hyderabad Pitch"], // Placeholder
    date: "March 25, 2025",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    team1Logo: "https://picsum.photos/seed/srh2025/40/40",
    team2Logo: "https://picsum.photos/seed/pbks2025/40/40",
  },
   {
    team1: "Gujarat Titans",
    team2: "Lucknow Super Giants",
    predictedWinner: "Gujarat Titans", // Placeholder
    confidence: 66, // Placeholder
    keyFactors: ["GT Bowling Strength", "LSG All-rounders", "Ahmedabad Conditions"], // Placeholder
    date: "March 26, 2025",
    venue: "Narendra Modi Stadium, Ahmedabad",
    team1Logo: "https://picsum.photos/seed/gt2025/40/40",
    team2Logo: "https://picsum.photos/seed/lsg2025/40/40",
  },
   {
    team1: "Chennai Super Kings",
    team2: "Royal Challengers Bengaluru",
    predictedWinner: "Chennai Super Kings", // Placeholder
    confidence: 69, // Placeholder
    keyFactors: ["CSK Home Ground", "RCB Star Players", "Spin Dominance"], // Placeholder
    date: "March 27, 2025",
    venue: "MA Chidambaram Stadium, Chennai",
    team1Logo: "https://picsum.photos/seed/csk2025b/40/40",
    team2Logo: "https://picsum.photos/seed/rcb2025b/40/40",
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          IPL Match Predictions Dashboard
        </h1>

        {/* Upcoming Match Predictions Section */}
        <section>
          <h2 className="text-xl font-semibold mb-1">Upcoming Matches (Hypothetical IPL 2025)</h2>
           <p className="text-sm text-muted-foreground mb-4">
            Note: Official IPL 2025 schedule not released. Data is illustrative.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {upcomingMatches.map((match, index) => (
              <MatchPredictionCard key={index} {...match} />
            ))}
          </div>
        </section>

        <Separator className="my-6" />

        {/* Player Performance Section */}
        <section>
            <h2 className="text-xl font-semibold mb-4">Player Performance Spotlight</h2>
            {/* Add logic to select/fetch player data */}
            <PlayerPerformanceChart playerName="Virat Kohli" /> {/* Example Player */}
        </section>

        <Separator className="my-6" />

        {/* AI Insights Section */}
        <section>
            <h2 className="text-xl font-semibold mb-4">AI Insights & Reasoning</h2>
            <AIInsightSection />
        </section>

      </main>
       <footer className="py-6 md:px-8 md:py-0 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built using Firebase AI Extensions. © {new Date().getFullYear()} Cricket Oracle. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
