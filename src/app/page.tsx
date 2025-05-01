import { Header } from "@/components/header";
import { PlayerPerformanceChart } from "@/components/player-performance-chart";
import { AIInsightSection } from "@/components/ai-insight-section";
import { Separator } from "@/components/ui/separator";
import { UpcomingMatchesList, type MatchData } from "@/components/upcoming-matches-list";

// Hypothetical IPL 2025 Schedule Data for May (Full List)
// NOTE: The official IPL 2025 schedule has not been released.
// This data is purely hypothetical for demonstration purposes based on the user's input.
// PredictedWinner, confidence, keyFactors, logos are placeholders.
// Time information is added for potential filtering.
const allUpcomingMatches: MatchData[] = [
   {
    team1: "Royal Challengers Bengaluru",
    team2: "Chennai Super Kings",
    predictedWinner: "Royal Challengers Bengaluru", // Placeholder
    confidence: 67, // Placeholder
    keyFactors: ["Home Advantage (Bengaluru)", "CSK Batting Depth", "Pace vs Spin"], // Placeholder
    date: "May 3, 2025 19:30", // Added time
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    team1Logo: "https://picsum.photos/seed/rcb2025may3/40/40",
    team2Logo: "https://picsum.photos/seed/csk2025may3/40/40",
  },
  {
    team1: "Kolkata Knight Riders",
    team2: "Rajasthan Royals",
    predictedWinner: "Kolkata Knight Riders", // Placeholder
    confidence: 65, // Placeholder
    keyFactors: ["KKR Spin Attack", "RR Top Order", "Eden Gardens Pitch"], // Placeholder
    date: "May 4, 2025 15:30", // Added time
    venue: "Eden Gardens, Kolkata",
    team1Logo: "https://picsum.photos/seed/kkr2025may4a/40/40",
    team2Logo: "https://picsum.photos/seed/rr2025may4a/40/40",
  },
  {
    team1: "Punjab Kings",
    team2: "Lucknow Super Giants",
    predictedWinner: "Lucknow Super Giants", // Placeholder
    confidence: 63, // Placeholder
    keyFactors: ["LSG All-rounders", "PBKS Power Hitting", "Dharamsala Conditions"], // Placeholder
    date: "May 4, 2025 19:30", // Added time
    venue: "HPCA Stadium, Dharamsala",
    team1Logo: "https://picsum.photos/seed/pbks2025may4b/40/40",
    team2Logo: "https://picsum.photos/seed/lsg2025may4b/40/40",
  },
  {
    team1: "Sunrisers Hyderabad",
    team2: "Delhi Capitals",
    predictedWinner: "Sunrisers Hyderabad", // Placeholder
    confidence: 66, // Placeholder
    keyFactors: ["SRH Batting Firepower", "DC Bowling Attack", "Hyderabad Pitch"], // Placeholder
    date: "May 5, 2025 19:30", // Added time
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    team1Logo: "https://picsum.photos/seed/srh2025may5/40/40",
    team2Logo: "https://picsum.photos/seed/dc2025may5/40/40",
  },
  {
    team1: "Mumbai Indians",
    team2: "Gujarat Titans",
    predictedWinner: "Mumbai Indians", // Placeholder
    confidence: 70, // Placeholder
    keyFactors: ["MI Home Advantage", "GT Bowling Strength", "Wankhede Conditions"], // Placeholder
    date: "May 6, 2025 19:30", // Added time
    venue: "Wankhede Stadium, Mumbai",
    team1Logo: "https://picsum.photos/seed/mi2025may6/40/40",
    team2Logo: "https://picsum.photos/seed/gt2025may6/40/40",
  },
  {
    team1: "Kolkata Knight Riders",
    team2: "Chennai Super Kings",
    predictedWinner: "Chennai Super Kings", // Placeholder
    confidence: 68, // Placeholder
    keyFactors: ["CSK Spin Dominance", "KKR Batting Form", "Kolkata Pitch"], // Placeholder
    date: "May 7, 2025 19:30", // Added time
    venue: "Eden Gardens, Kolkata",
    team1Logo: "https://picsum.photos/seed/kkr2025may7/40/40",
    team2Logo: "https://picsum.photos/seed/csk2025may7/40/40",
  },
    {
    team1: "Punjab Kings",
    team2: "Delhi Capitals",
    predictedWinner: "Delhi Capitals", // Placeholder
    confidence: 64, // Placeholder
    keyFactors: ["DC Batting Depth", "PBKS Inconsistency", "Dharamsala Conditions"], // Placeholder
    date: "May 8, 2025 19:30", // Added time
    venue: "HPCA Stadium, Dharamsala",
    team1Logo: "https://picsum.photos/seed/pbks2025may8/40/40",
    team2Logo: "https://picsum.photos/seed/dc2025may8/40/40",
  },
  {
    team1: "Lucknow Super Giants",
    team2: "Royal Challengers Bengaluru",
    predictedWinner: "Lucknow Super Giants", // Placeholder
    confidence: 66, // Placeholder
    keyFactors: ["LSG Home Ground", "RCB Star Players", "Spin vs Pace"], // Placeholder
    date: "May 9, 2025 19:30", // Added time
    venue: "BRSABV Ekana Cricket Stadium, Lucknow",
    team1Logo: "https://picsum.photos/seed/lsg2025may9/40/40",
    team2Logo: "https://picsum.photos/seed/rcb2025may9/40/40",
  },
  {
    team1: "Sunrisers Hyderabad",
    team2: "Kolkata Knight Riders",
    predictedWinner: "Sunrisers Hyderabad", // Placeholder
    confidence: 69, // Placeholder
    keyFactors: ["SRH Aggressive Opening", "KKR Middle Order", "Hyderabad Pitch"], // Placeholder
    date: "May 10, 2025 19:30", // Added time
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    team1Logo: "https://picsum.photos/seed/srh2025may10/40/40",
    team2Logo: "https://picsum.photos/seed/kkr2025may10/40/40",
  },
  {
    team1: "Punjab Kings",
    team2: "Mumbai Indians",
    predictedWinner: "Mumbai Indians", // Placeholder
    confidence: 71, // Placeholder
    keyFactors: ["MI Batting Power", "PBKS Bowling", "Dharamsala Pitch"], // Placeholder
    date: "May 11, 2025 15:30", // Added time
    venue: "HPCA Stadium, Dharamsala",
    team1Logo: "https://picsum.photos/seed/pbks2025may11a/40/40",
    team2Logo: "https://picsum.photos/seed/mi2025may11a/40/40",
  },
  {
    team1: "Delhi Capitals",
    team2: "Gujarat Titans",
    predictedWinner: "Gujarat Titans", // Placeholder
    confidence: 65, // Placeholder
    keyFactors: ["GT Bowling Attack", "DC Young Talent", "Delhi Pitch"], // Placeholder
    date: "May 11, 2025 19:30", // Added time
    venue: "Arun Jaitley Stadium, Delhi",
    team1Logo: "https://picsum.photos/seed/dc2025may11b/40/40",
    team2Logo: "https://picsum.photos/seed/gt2025may11b/40/40",
  },
   {
    team1: "Chennai Super Kings",
    team2: "Rajasthan Royals",
    predictedWinner: "Chennai Super Kings", // Placeholder
    confidence: 72, // Placeholder
    keyFactors: ["CSK Home Advantage (Chepauk)", "RR Strong Finishers", "Spin Factor"], // Placeholder
    date: "May 12, 2025 19:30", // Added time
    venue: "MA Chidambaram Stadium, Chennai",
    team1Logo: "https://picsum.photos/seed/csk2025may12/40/40",
    team2Logo: "https://picsum.photos/seed/rr2025may12/40/40",
  },
  {
    team1: "Royal Challengers Bengaluru",
    team2: "Sunrisers Hyderabad",
    predictedWinner: "Royal Challengers Bengaluru", // Placeholder
    confidence: 68, // Placeholder
    keyFactors: ["RCB Batting Lineup", "SRH Pace Attack", "Bengaluru Pitch"], // Placeholder
    date: "May 13, 2025 19:30", // Added time
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    team1Logo: "https://picsum.photos/seed/rcb2025may13/40/40",
    team2Logo: "https://picsum.photos/seed/srh2025may13/40/40",
  },
  {
    team1: "Gujarat Titans",
    team2: "Lucknow Super Giants",
    predictedWinner: "Gujarat Titans", // Placeholder
    confidence: 67, // Placeholder
    keyFactors: ["GT Balanced Squad", "LSG All-round Prowess", "Ahmedabad Conditions"], // Placeholder
    date: "May 14, 2025 19:30", // Added time
    venue: "Narendra Modi Stadium, Ahmedabad",
    team1Logo: "https://picsum.photos/seed/gt2025may14/40/40",
    team2Logo: "https://picsum.photos/seed/lsg2025may14/40/40",
  },
  {
    team1: "Mumbai Indians",
    team2: "Delhi Capitals",
    predictedWinner: "Mumbai Indians", // Placeholder
    confidence: 70, // Placeholder
    keyFactors: ["MI Experience", "DC Fearless Cricket", "Wankhede Pitch"], // Placeholder
    date: "May 15, 2025 19:30", // Added time
    venue: "Wankhede Stadium, Mumbai",
    team1Logo: "https://picsum.photos/seed/mi2025may15/40/40",
    team2Logo: "https://picsum.photos/seed/dc2025may15/40/40",
  },
  {
    team1: "Rajasthan Royals",
    team2: "Punjab Kings",
    predictedWinner: "Rajasthan Royals", // Placeholder
    confidence: 66, // Placeholder
    keyFactors: ["RR Home Advantage (Jaipur)", "PBKS Batting Power", "Pitch Conditions"], // Placeholder
    date: "May 16, 2025 19:30", // Added time
    venue: "Sawai Mansingh Stadium, Jaipur",
    team1Logo: "https://picsum.photos/seed/rr2025may16/40/40",
    team2Logo: "https://picsum.photos/seed/pbks2025may16/40/40",
  },
   {
    team1: "Royal Challengers Bengaluru",
    team2: "Kolkata Knight Riders",
    predictedWinner: "Royal Challengers Bengaluru", // Placeholder
    confidence: 69, // Placeholder
    keyFactors: ["RCB Batting Might", "KKR Spin Duo", "Bengaluru High Scoring"], // Placeholder
    date: "May 17, 2025 19:30", // Added time
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    team1Logo: "https://picsum.photos/seed/rcb2025may17/40/40",
    team2Logo: "https://picsum.photos/seed/kkr2025may17/40/40",
  },
  {
    team1: "Gujarat Titans",
    team2: "Chennai Super Kings",
    predictedWinner: "Gujarat Titans", // Placeholder
    confidence: 67, // Placeholder
    keyFactors: ["GT Home Ground", "CSK Experience", "Key Player Matchups"], // Placeholder
    date: "May 18, 2025 15:30", // Added time
    venue: "Narendra Modi Stadium, Ahmedabad",
    team1Logo: "https://picsum.photos/seed/gt2025may18a/40/40",
    team2Logo: "https://picsum.photos/seed/csk2025may18a/40/40",
  },
   {
    team1: "Lucknow Super Giants",
    team2: "Sunrisers Hyderabad",
    predictedWinner: "Lucknow Super Giants", // Placeholder
    confidence: 65, // Placeholder
    keyFactors: ["LSG Balanced Team", "SRH Aggressive Batting", "Lucknow Pitch"], // Placeholder
    date: "May 18, 2025 19:30", // Added time
    venue: "BRSABV Ekana Cricket Stadium, Lucknow",
    team1Logo: "https://picsum.photos/seed/lsg2025may18b/40/40",
    team2Logo: "https://picsum.photos/seed/srh2025may18b/40/40",
  },
   // Note: Playoff matches are kept here but might be filtered out by the client component logic
  {
    team1: "TBC", // Placeholder
    team2: "TBC", // Placeholder
    predictedWinner: "TBC",
    confidence: undefined,
    keyFactors: ["Qualifier 1", "High Stakes"],
    date: "May 20, 2025 19:30", // Added time
    venue: "Rajiv Gandhi International Stadium, Hyderabad", // Updated venue based on user info
    team1Logo: "https://picsum.photos/seed/tbcq1a/40/40",
    team2Logo: "https://picsum.photos/seed/tbcq1b/40/40",
  },
  {
    team1: "TBC", // Placeholder
    team2: "TBC", // Placeholder
    predictedWinner: "TBC",
    confidence: undefined,
    keyFactors: ["Eliminator", "Must Win"],
    date: "May 21, 2025 19:30", // Added time
    venue: "Rajiv Gandhi International Stadium, Hyderabad", // Updated venue based on user info
    team1Logo: "https://picsum.photos/seed/tbcelima/40/40",
    team2Logo: "https://picsum.photos/seed/tbcelimb/40/40",
  },
  {
    team1: "TBC", // Placeholder
    team2: "TBC", // Placeholder
    predictedWinner: "TBC",
    confidence: undefined,
    keyFactors: ["Qualifier 2", "Final Spot"],
    date: "May 23, 2025 19:30", // Added time
    venue: "Eden Gardens, Kolkata", // Updated venue based on user info
    team1Logo: "https://picsum.photos/seed/tbcq2a/40/40",
    team2Logo: "https://picsum.photos/seed/tbcq2b/40/40",
  },
   {
    team1: "TBC", // Placeholder
    team2: "TBC", // Placeholder
    predictedWinner: "TBC",
    confidence: undefined,
    keyFactors: ["Final", "IPL Trophy"],
    date: "May 25, 2025 19:30", // Added time
    venue: "Eden Gardens, Kolkata", // Updated venue based on user info
    team1Logo: "https://picsum.photos/seed/tbcfinala/40/40",
    team2Logo: "https://picsum.photos/seed/tbcfinalb/40/40",
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

        {/* Upcoming Match Predictions Section - Now uses Client Component */}
        <section>
          <h2 className="text-xl font-semibold mb-1">Upcoming Matches (Hypothetical IPL 2025 - May)</h2>
           <p className="text-sm text-muted-foreground mb-4">
            Note: Official IPL 2025 schedule not released. Data is illustrative based on user input. Showing next 8 upcoming matches.
          </p>
          <UpcomingMatchesList allMatches={allUpcomingMatches} />
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
