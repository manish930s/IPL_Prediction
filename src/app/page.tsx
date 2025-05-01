import { Header } from "@/components/header";
import { MatchPredictionCard } from "@/components/match-prediction-card";
import { PlayerPerformanceChart } from "@/components/player-performance-chart";
import { AIInsightSection } from "@/components/ai-insight-section";
import { Separator } from "@/components/ui/separator";

// Updated with actual IPL 2024 March schedule data
// PredictedWinner, confidence, keyFactors are still placeholders
const upcomingMatches = [
  {
    team1: "Chennai Super Kings",
    team2: "Royal Challengers Bengaluru",
    predictedWinner: "Chennai Super Kings", // Placeholder
    confidence: 65, // Placeholder
    keyFactors: ["Home Advantage", "CSK Spinners", "RCB Top Order"], // Placeholder
    date: "Mar 22, 2024",
    venue: "MA Chidambaram Stadium, Chennai",
    team1Logo: "https://picsum.photos/seed/csk24/40/40",
    team2Logo: "https://picsum.photos/seed/rcb24/40/40",
  },
  {
    team1: "Punjab Kings",
    team2: "Delhi Capitals",
    predictedWinner: "Punjab Kings", // Placeholder
    confidence: 60, // Placeholder
    keyFactors: ["PBKS Power Hitting", "DC Bowling", "Venue History"], // Placeholder
    date: "Mar 23, 2024",
    venue: "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
    team1Logo: "https://picsum.photos/seed/pbks24/40/40",
    team2Logo: "https://picsum.photos/seed/dc24/40/40",
  },
   {
    team1: "Kolkata Knight Riders",
    team2: "Sunrisers Hyderabad",
    predictedWinner: "Kolkata Knight Riders", // Placeholder
    confidence: 70, // Placeholder
    keyFactors: ["KKR Home Advantage", "SRH Batting Depth", "Spin Factor"], // Placeholder
    date: "Mar 23, 2024",
    venue: "Eden Gardens, Kolkata",
    team1Logo: "https://picsum.photos/seed/kkr24/40/40",
    team2Logo: "https://picsum.photos/seed/srh24/40/40",
  },
   {
    team1: "Rajasthan Royals",
    team2: "Lucknow Super Giants",
    predictedWinner: "Rajasthan Royals", // Placeholder
    confidence: 68, // Placeholder
    keyFactors: ["RR Strong Batting", "LSG Pace Attack", "Home Ground"], // Placeholder
    date: "Mar 24, 2024",
    venue: "Sawai Mansingh Stadium, Jaipur",
    team1Logo: "https://picsum.photos/seed/rr24/40/40",
    team2Logo: "https://picsum.photos/seed/lsg24/40/40",
  },
   {
    team1: "Gujarat Titans",
    team2: "Mumbai Indians",
    predictedWinner: "Gujarat Titans", // Placeholder
    confidence: 62, // Placeholder
    keyFactors: ["GT Bowling Strength", "MI Experienced Lineup", "Venue Stats"], // Placeholder
    date: "Mar 24, 2024",
    venue: "Narendra Modi Stadium, Ahmedabad",
    team1Logo: "https://picsum.photos/seed/gt24/40/40",
    team2Logo: "https://picsum.photos/seed/mi24/40/40",
  },
   {
    team1: "Royal Challengers Bengaluru",
    team2: "Punjab Kings",
    predictedWinner: "Royal Challengers Bengaluru", // Placeholder
    confidence: 72, // Placeholder
    keyFactors: ["RCB Home Ground", "Kohli's Form", "PBKS Bowling"], // Placeholder
    date: "Mar 25, 2024",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    team1Logo: "https://picsum.photos/seed/rcb24/40/40",
    team2Logo: "https://picsum.photos/seed/pbks24/40/40",
  },
    {
    team1: "Chennai Super Kings",
    team2: "Gujarat Titans",
    predictedWinner: "Chennai Super Kings", // Placeholder
    confidence: 66, // Placeholder
    keyFactors: ["CSK at Chepauk", "GT Balanced Squad", "Captaincy"], // Placeholder
    date: "Mar 26, 2024",
    venue: "MA Chidambaram Stadium, Chennai",
    team1Logo: "https://picsum.photos/seed/csk24/40/40",
    team2Logo: "https://picsum.photos/seed/gt24/40/40",
  },
    {
    team1: "Sunrisers Hyderabad",
    team2: "Mumbai Indians",
    predictedWinner: "Mumbai Indians", // Placeholder
    confidence: 63, // Placeholder
    keyFactors: ["SRH Home Ground", "MI Explosive Batting", "Pace vs Pace"], // Placeholder
    date: "Mar 27, 2024",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    team1Logo: "https://picsum.photos/seed/srh24/40/40",
    team2Logo: "https://picsum.photos/seed/mi24/40/40",
  },
    {
    team1: "Rajasthan Royals",
    team2: "Delhi Capitals",
    predictedWinner: "Rajasthan Royals", // Placeholder
    confidence: 69, // Placeholder
    keyFactors: ["RR Strong Home Record", "DC All-rounders", "Key Player Matchups"], // Placeholder
    date: "Mar 28, 2024",
    venue: "Sawai Mansingh Stadium, Jaipur",
    team1Logo: "https://picsum.photos/seed/rr24/40/40",
    team2Logo: "https://picsum.photos/seed/dc24/40/40",
  },
    {
    team1: "Royal Challengers Bengaluru",
    team2: "Kolkata Knight Riders",
    predictedWinner: "Kolkata Knight Riders", // Placeholder
    confidence: 61, // Placeholder
    keyFactors: ["RCB Batting Power", "KKR Spin Trio", "Chinnaswamy Runs"], // Placeholder
    date: "Mar 29, 2024",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    team1Logo: "https://picsum.photos/seed/rcb24/40/40",
    team2Logo: "https://picsum.photos/seed/kkr24/40/40",
  },
   {
    team1: "Lucknow Super Giants",
    team2: "Punjab Kings",
    predictedWinner: "Lucknow Super Giants", // Placeholder
    confidence: 64, // Placeholder
    keyFactors: ["LSG Home Advantage", "PBKS Batting Depth", "Pace Attack"], // Placeholder
    date: "Mar 30, 2024",
    venue: "BRSABV Ekana Cricket Stadium, Lucknow",
    team1Logo: "https://picsum.photos/seed/lsg24/40/40",
    team2Logo: "https://picsum.photos/seed/pbks24/40/40",
  },
   {
    team1: "Gujarat Titans",
    team2: "Sunrisers Hyderabad",
    predictedWinner: "Gujarat Titans", // Placeholder
    confidence: 67, // Placeholder
    keyFactors: ["GT Strong Home Record", "SRH Aggressive Batting", "Bowling Duel"], // Placeholder
    date: "Mar 31, 2024",
    venue: "Narendra Modi Stadium, Ahmedabad",
    team1Logo: "https://picsum.photos/seed/gt24/40/40",
    team2Logo: "https://picsum.photos/seed/srh24/40/40",
  },
   {
    team1: "Delhi Capitals",
    team2: "Chennai Super Kings",
    predictedWinner: "Chennai Super Kings", // Placeholder
    confidence: 71, // Placeholder
    keyFactors: ["CSK Consistency", "DC Batting Firepower", "Venue Dynamics (Vizag)"], // Placeholder
    date: "Mar 31, 2024",
    venue: "Dr YS Rajasekhara Reddy ACA-VDCA Stadium, Visakhapatnam",
    team1Logo: "https://picsum.photos/seed/dc24/40/40",
    team2Logo: "https://picsum.photos/seed/csk24/40/40",
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
          <h2 className="text-xl font-semibold mb-4">Upcoming Matches (IPL 2024 - March)</h2>
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
