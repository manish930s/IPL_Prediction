import { Header } from "@/components/header";
import { MatchPredictionCard } from "@/components/match-prediction-card";
import { PlayerPerformanceChart } from "@/components/player-performance-chart";
import { AIInsightSection } from "@/components/ai-insight-section";
import { Separator } from "@/components/ui/separator";

// Placeholder data for IPL 2025 - replace with actual data fetching logic
const upcomingMatches = [
  {
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    predictedWinner: "Chennai Super Kings",
    confidence: 65,
    keyFactors: ["Venue History", "CSK Spinners", "MI Middle Order"],
    date: "Apr 05, 2025",
    venue: "MA Chidambaram Stadium, Chennai",
    team1Logo: "https://picsum.photos/seed/mi25/40/40",
    team2Logo: "https://picsum.photos/seed/csk25/40/40",
  },
  {
    team1: "Royal Challengers Bangalore", // Now Bengaluru
    team2: "Kolkata Knight Riders",
    predictedWinner: "Royal Challengers Bangalore",
    confidence: 72,
    keyFactors: ["Home Advantage", "Kohli's Form", "KKR Pace Attack"],
    date: "Apr 06, 2025",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    team1Logo: "https://picsum.photos/seed/rcb25/40/40",
    team2Logo: "https://picsum.photos/seed/kkr25/40/40",
  },
   {
    team1: "Gujarat Titans",
    team2: "Rajasthan Royals",
    predictedWinner: "Gujarat Titans",
    confidence: 68,
    keyFactors: ["Strong Bowling Unit", "Gill's Captaincy", "RR Batting Depth"],
    date: "Apr 07, 2025",
    venue: "Narendra Modi Stadium, Ahmedabad",
    team1Logo: "https://picsum.photos/seed/gt25/40/40",
    team2Logo: "https://picsum.photos/seed/rr25/40/40",
  },
   {
    team1: "Lucknow Super Giants",
    team2: "Sunrisers Hyderabad",
    predictedWinner: "Sunrisers Hyderabad",
    confidence: 70,
    keyFactors: ["Aggressive Batting", "SRH Pace Battery", "LSG Finishing Issues"],
    date: "Apr 08, 2025",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    team1Logo: "https://picsum.photos/seed/lsg25/40/40",
    team2Logo: "https://picsum.photos/seed/srh25/40/40",
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
          <h2 className="text-xl font-semibold mb-4">Upcoming Matches (IPL 2025 - Sample)</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
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
            <PlayerPerformanceChart playerName="Virat Kohli" />
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
