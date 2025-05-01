import { Header } from "@/components/header";
import { MatchPredictionCard } from "@/components/match-prediction-card";
import { PlayerPerformanceChart } from "@/components/player-performance-chart";
import { AIInsightSection } from "@/components/ai-insight-section";
import { Separator } from "@/components/ui/separator";

// Placeholder data - replace with actual data fetching logic
const upcomingMatches = [
  {
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    predictedWinner: "Mumbai Indians",
    confidence: 75,
    keyFactors: ["Recent Form", "Head-to-Head", "Rohit Sharma's form"],
    date: "Apr 15, 2024",
    venue: "Wankhede Stadium, Mumbai",
    team1Logo: "https://picsum.photos/seed/mi/40/40",
    team2Logo: "https://picsum.photos/seed/csk/40/40",
  },
  {
    team1: "Royal Challengers Bangalore",
    team2: "Kolkata Knight Riders",
    predictedWinner: "Kolkata Knight Riders",
    confidence: 68,
    keyFactors: ["Spin Attack", "Venue Record", "Maxwell's inconsistency"],
    date: "Apr 16, 2024",
    venue: "Eden Gardens, Kolkata",
    team1Logo: "https://picsum.photos/seed/rcb/40/40",
    team2Logo: "https://picsum.photos/seed/kkr/40/40",
  },
   {
    team1: "Delhi Capitals",
    team2: "Sunrisers Hyderabad",
    predictedWinner: "Delhi Capitals",
    confidence: 82,
    keyFactors: ["Strong Batting", "Warner's Experience", "Home Advantage"],
    date: "Apr 17, 2024",
    venue: "Arun Jaitley Stadium, Delhi",
    team1Logo: "https://picsum.photos/seed/dc/40/40",
    team2Logo: "https://picsum.photos/seed/srh/40/40",
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
          <h2 className="text-xl font-semibold mb-4">Upcoming Matches</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            Built by Your Name/Team. © {new Date().getFullYear()} Cricket Oracle. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
