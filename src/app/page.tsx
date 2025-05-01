import { Header } from "@/components/header";
import { MatchPredictionCard } from "@/components/match-prediction-card";
import { PlayerPerformanceChart } from "@/components/player-performance-chart";
import { AIInsightSection } from "@/components/ai-insight-section";
import { Separator } from "@/components/ui/separator";

// Updated with actual IPL 2024 May schedule data
// PredictedWinner, confidence, keyFactors are still placeholders
const upcomingMatches = [
  {
    team1: "Chennai Super Kings",
    team2: "Punjab Kings",
    predictedWinner: "Chennai Super Kings", // Placeholder
    confidence: 65, // Placeholder
    keyFactors: ["CSK Home Advantage", "PBKS inconsistency", "Spin factor"], // Placeholder
    date: "May 1, 2024",
    venue: "MA Chidambaram Stadium, Chennai",
    team1Logo: "https://picsum.photos/seed/cskmay1/40/40",
    team2Logo: "https://picsum.photos/seed/pbksmay1/40/40",
  },
  {
    team1: "Sunrisers Hyderabad",
    team2: "Rajasthan Royals",
    predictedWinner: "Rajasthan Royals", // Placeholder
    confidence: 68, // Placeholder
    keyFactors: ["RR Consistent Form", "SRH Batting Power", "Pace Attack"], // Placeholder
    date: "May 2, 2024",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    team1Logo: "https://picsum.photos/seed/srhmay2/40/40",
    team2Logo: "https://picsum.photos/seed/rrmay2/40/40",
  },
   {
    team1: "Mumbai Indians",
    team2: "Kolkata Knight Riders",
    predictedWinner: "Kolkata Knight Riders", // Placeholder
    confidence: 62, // Placeholder
    keyFactors: ["MI Home Ground", "KKR All-round Strength", "Spinners Duel"], // Placeholder
    date: "May 3, 2024",
    venue: "Wankhede Stadium, Mumbai",
    team1Logo: "https://picsum.photos/seed/mimay3/40/40",
    team2Logo: "https://picsum.photos/seed/kkrmay3/40/40",
  },
   {
    team1: "Royal Challengers Bengaluru",
    team2: "Gujarat Titans",
    predictedWinner: "Royal Challengers Bengaluru", // Placeholder
    confidence: 60, // Placeholder
    keyFactors: ["RCB Batting Depth", "GT Bowling", "Chinnaswamy Factor"], // Placeholder
    date: "May 4, 2024",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    team1Logo: "https://picsum.photos/seed/rcbmay4/40/40",
    team2Logo: "https://picsum.photos/seed/gtmay4/40/40",
  },
   {
    team1: "Punjab Kings",
    team2: "Chennai Super Kings",
    predictedWinner: "Chennai Super Kings", // Placeholder
    confidence: 66, // Placeholder
    keyFactors: ["CSK Experience", "PBKS Venue (Dharamsala)", "Dew Factor"], // Placeholder
    date: "May 5, 2024",
    venue: "HPCA Stadium, Dharamsala",
    team1Logo: "https://picsum.photos/seed/pbksmay5/40/40",
    team2Logo: "https://picsum.photos/seed/cskmay5/40/40",
  },
   {
    team1: "Lucknow Super Giants",
    team2: "Kolkata Knight Riders",
    predictedWinner: "Kolkata Knight Riders", // Placeholder
    confidence: 64, // Placeholder
    keyFactors: ["KKR Spin Attack", "LSG Home Ground", "Batting Matchup"], // Placeholder
    date: "May 5, 2024",
    venue: "BRSABV Ekana Cricket Stadium, Lucknow",
    team1Logo: "https://picsum.photos/seed/lsgmay5/40/40",
    team2Logo: "https://picsum.photos/seed/kkrmay5/40/40",
  },
    {
    team1: "Mumbai Indians",
    team2: "Sunrisers Hyderabad",
    predictedWinner: "Mumbai Indians", // Placeholder
    confidence: 63, // Placeholder
    keyFactors: ["MI Batting Power", "SRH Pace", "Wankhede Runs"], // Placeholder
    date: "May 6, 2024",
    venue: "Wankhede Stadium, Mumbai",
    team1Logo: "https://picsum.photos/seed/mimay6/40/40",
    team2Logo: "https://picsum.photos/seed/srhmay6/40/40",
  },
    {
    team1: "Delhi Capitals",
    team2: "Rajasthan Royals",
    predictedWinner: "Rajasthan Royals", // Placeholder
    confidence: 70, // Placeholder
    keyFactors: ["RR Overall Form", "DC Home Advantage", "Key Player Battles"], // Placeholder
    date: "May 7, 2024",
    venue: "Arun Jaitley Stadium, Delhi",
    team1Logo: "https://picsum.photos/seed/dcmay7/40/40",
    team2Logo: "https://picsum.photos/seed/rrmay7/40/40",
  },
    {
    team1: "Sunrisers Hyderabad",
    team2: "Lucknow Super Giants",
    predictedWinner: "Sunrisers Hyderabad", // Placeholder
    confidence: 61, // Placeholder
    keyFactors: ["SRH Batting Aggression", "LSG Bowling", "Hyderabad Pitch"], // Placeholder
    date: "May 8, 2024",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    team1Logo: "https://picsum.photos/seed/srhmay8/40/40",
    team2Logo: "https://picsum.photos/seed/lsgmay8/40/40",
  },
    {
    team1: "Punjab Kings",
    team2: "Royal Challengers Bengaluru",
    predictedWinner: "Royal Challengers Bengaluru", // Placeholder
    confidence: 67, // Placeholder
    keyFactors: ["RCB Recent Form", "PBKS Need to Win", "Dharamsala Conditions"], // Placeholder
    date: "May 9, 2024",
    venue: "HPCA Stadium, Dharamsala",
    team1Logo: "https://picsum.photos/seed/pbksmay9/40/40",
    team2Logo: "https://picsum.photos/seed/rcbmay9/40/40",
  },
   {
    team1: "Gujarat Titans",
    team2: "Chennai Super Kings",
    predictedWinner: "Chennai Super Kings", // Placeholder
    confidence: 69, // Placeholder
    keyFactors: ["CSK Consistency", "GT Home Ground", "Bowling Matchup"], // Placeholder
    date: "May 10, 2024",
    venue: "Narendra Modi Stadium, Ahmedabad",
    team1Logo: "https://picsum.photos/seed/gtmay10/40/40",
    team2Logo: "https://picsum.photos/seed/cskmay10/40/40",
  },
   {
    team1: "Kolkata Knight Riders",
    team2: "Mumbai Indians",
    predictedWinner: "Kolkata Knight Riders", // Placeholder
    confidence: 72, // Placeholder
    keyFactors: ["KKR Home Advantage", "MI Inconsistency", "Eden Gardens Pitch"], // Placeholder
    date: "May 11, 2024",
    venue: "Eden Gardens, Kolkata",
    team1Logo: "https://picsum.photos/seed/kkrmay11/40/40",
    team2Logo: "https://picsum.photos/seed/mimay11/40/40",
  },
   {
    team1: "Chennai Super Kings",
    team2: "Rajasthan Royals",
    predictedWinner: "Rajasthan Royals", // Placeholder
    confidence: 65, // Placeholder
    keyFactors: ["RR Table Position", "CSK Home Fortress", "Spin vs Pace"], // Placeholder
    date: "May 12, 2024",
    venue: "MA Chidambaram Stadium, Chennai",
    team1Logo: "https://picsum.photos/seed/cskmay12/40/40",
    team2Logo: "https://picsum.photos/seed/rrmay12/40/40",
  },
   {
    team1: "Royal Challengers Bengaluru",
    team2: "Delhi Capitals",
    predictedWinner: "Royal Challengers Bengaluru", // Placeholder
    confidence: 68, // Placeholder
    keyFactors: ["RCB Momentum", "DC Playoff Push", "Chinnaswamy High Score"], // Placeholder
    date: "May 12, 2024",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    team1Logo: "https://picsum.photos/seed/rcbmay12/40/40",
    team2Logo: "https://picsum.photos/seed/dcmay12/40/40",
  },
   {
    team1: "Gujarat Titans",
    team2: "Kolkata Knight Riders",
    predictedWinner: "Kolkata Knight Riders", // Placeholder
    confidence: 71, // Placeholder
    keyFactors: ["KKR Form", "GT Home Pressure", "Top Order Battle"], // Placeholder
    date: "May 13, 2024",
    venue: "Narendra Modi Stadium, Ahmedabad",
    team1Logo: "https://picsum.photos/seed/gtmay13/40/40",
    team2Logo: "https://picsum.photos/seed/kkrmay13/40/40",
  },
   {
    team1: "Delhi Capitals",
    team2: "Lucknow Super Giants",
    predictedWinner: "Delhi Capitals", // Placeholder
    confidence: 60, // Placeholder
    keyFactors: ["DC Must Win", "LSG Bowling", "Delhi Pitch"], // Placeholder
    date: "May 14, 2024",
    venue: "Arun Jaitley Stadium, Delhi",
    team1Logo: "https://picsum.photos/seed/dcmay14/40/40",
    team2Logo: "https://picsum.photos/seed/lsgmay14/40/40",
  },
  // Add more May matches as needed following the pattern
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
          <h2 className="text-xl font-semibold mb-4">Upcoming Matches (IPL 2024 - May)</h2>
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
