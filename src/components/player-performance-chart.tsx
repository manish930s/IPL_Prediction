"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data structure - replace with actual data fetching/props
const chartData = [
  { match: "Match 1", runs: 35, wickets: 1, economy: 7.5 },
  { match: "Match 2", runs: 80, wickets: 0, economy: 0 },
  { match: "Match 3", runs: 15, wickets: 3, economy: 6.2 },
  { match: "Match 4", runs: 55, wickets: 0, economy: 0 },
  { match: "Match 5", runs: 42, wickets: 2, economy: 8.1 },
];

const runsChartConfig = {
  runs: {
    label: "Runs Scored",
    color: "hsl(var(--primary))", // Use primary color (dark green)
  },
} satisfies ChartConfig;

const wicketsChartConfig = {
  wickets: {
    label: "Wickets Taken",
    color: "hsl(var(--accent))", // Use accent color (yellow)
  },
} satisfies ChartConfig;

const economyChartConfig = {
    economy: {
      label: "Economy Rate",
      color: "hsl(var(--chart-5))", // Muted Green
    },
  } satisfies ChartConfig;

interface PlayerPerformanceChartProps {
    playerName: string;
    // Add props for actual data later
}

export function PlayerPerformanceChart({ playerName }: PlayerPerformanceChartProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          {playerName} - Recent Performance
        </CardTitle>
        <CardDescription>Last 5 Matches</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Runs Chart */}
            <div>
                <h4 className="text-sm font-semibold mb-2 text-center">Runs Scored</h4>
                <ChartContainer config={runsChartConfig} className="h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                        dataKey="match"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)} // Shorten labels if needed
                        />
                         <YAxis />
                        <Tooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="runs" fill="var(--color-runs)" radius={4} />
                    </BarChart>
                </ChartContainer>
             </div>

            {/* Wickets Chart */}
             <div>
                <h4 className="text-sm font-semibold mb-2 text-center">Wickets Taken</h4>
                <ChartContainer config={wicketsChartConfig} className="h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="match"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                     <YAxis />
                    <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="wickets" fill="var(--color-wickets)" radius={4} />
                </BarChart>
                </ChartContainer>
            </div>

             {/* Economy Chart */}
             <div>
                <h4 className="text-sm font-semibold mb-2 text-center">Economy Rate</h4>
                <ChartContainer config={economyChartConfig} className="h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData.filter(d => d.economy > 0)} > {/* Filter out 0 economy */}
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="match"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
                    <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="economy" fill="var(--color-economy)" radius={4} />
                </BarChart>
                </ChartContainer>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
