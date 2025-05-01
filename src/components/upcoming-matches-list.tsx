
"use client";

import { useState, useEffect } from 'react';
import { MatchPredictionCard } from "@/components/match-prediction-card";
import { parse } from 'date-fns'; // Use date-fns for reliable date parsing

// Define the structure of match data
export interface MatchData {
  team1: string;
  team2: string;
  predictedWinner: string;
  confidence?: number;
  keyFactors: string[];
  date: string; // Expecting format like "May 3, 2025 19:30"
  venue: string;
  team1Logo?: string;
  team2Logo?: string;
}

interface UpcomingMatchesListProps {
  allMatches: MatchData[];
}

export function UpcomingMatchesList({ allMatches }: UpcomingMatchesListProps) {
  const [visibleMatches, setVisibleMatches] = useState<MatchData[]>([]);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // Set the current time only on the client-side after hydration
    setNow(new Date());
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    if (now === null) {
      // Don't filter until 'now' is set on the client
      return;
    }

    const filteredAndSortedMatches = allMatches
      .map(match => {
        // Attempt to parse the date string
        try {
            // Handle parsing with a specific format. Adjust if your date format is different.
            // 'MMM d, yyyy HH:mm' corresponds to 'May 3, 2025 19:30'
            const matchDate = parse(match.date, 'MMM d, yyyy HH:mm', new Date());
            // Check if parsing was successful
            if (isNaN(matchDate.getTime())) {
                console.warn(`Invalid date format for match: ${match.team1} vs ${match.team2} - ${match.date}`);
                return { ...match, parsedDate: null };
            }
            return { ...match, parsedDate: matchDate };
        } catch (e) {
            console.error(`Error parsing date for match: ${match.team1} vs ${match.team2} - ${match.date}`, e);
            return { ...match, parsedDate: null };
        }
      })
      .filter(match => match.parsedDate !== null && match.parsedDate >= now) // Keep only future matches
      .sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime()); // Sort by date ascending

    setVisibleMatches(filteredAndSortedMatches.slice(0, 8)); // Take the next 8 matches
  }, [allMatches, now]); // Re-run when allMatches or now changes

  if (now === null) {
      // Render loading state or placeholder while waiting for client-side hydration
      return <p className="text-muted-foreground text-center">Loading matches...</p>;
  }

  if (visibleMatches.length === 0) {
    return <p className="text-muted-foreground text-center">No upcoming matches found based on the current date.</p>;
  }

  return (
    // Responsive Grid: 1 col default, 2 cols on sm+, 3 cols on lg+, 4 cols on xl+
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {visibleMatches.map((match, index) => (
        // Pass only the necessary props to MatchPredictionCard
        <MatchPredictionCard
          key={`${match.date}-${match.team1}-${index}`} // More robust key
          team1={match.team1}
          team2={match.team2}
          predictedWinner={match.predictedWinner}
          confidence={match.confidence}
          keyFactors={match.keyFactors}
          // Format date to "MMM d, yyyy" for display
          date={match.parsedDate ? match.parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : match.date.split(' ')[0] + ' ' + match.date.split(' ')[1] + ' ' + match.date.split(' ')[2]}
          venue={match.venue}
          team1Logo={match.team1Logo}
          team2Logo={match.team2Logo}
        />
      ))}
    </div>
  );
}
