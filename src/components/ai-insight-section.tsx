
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { explainMatchPrediction } from "@/ai/flows/explain-match-prediction";
import { generateMatchSummary } from "@/ai/flows/generate-match-summary";

const explanationFormSchema = z.object({
  team1: z.string().min(1, "Team 1 name is required."),
  team2: z.string().min(1, "Team 2 name is required."),
  prediction: z.string().min(1, "Prediction is required."),
  keyFactors: z.string().min(1, "Key factors are required."),
});

type ExplanationFormValues = z.infer<typeof explanationFormSchema>;

const summaryFormSchema = z.object({
    team1: z.string().min(1, "Team 1 name is required."),
    team2: z.string().min(1, "Team 2 name is required."),
    predictedWinner: z.string().min(1, "Predicted winner is required."),
    keyFactors: z.string().min(1, "Key factors are required."),
    potentialOutcomes: z.string().min(1, "Potential outcomes are required."),
});

type SummaryFormValues = z.infer<typeof summaryFormSchema>;


export function AIInsightSection() {
  const [explanationLoading, setExplanationLoading] = useState(false);
  const [explanationResult, setExplanationResult] = useState<string | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summaryResult, setSummaryResult] = useState<string | null>(null);
  const { toast } = useToast();

  const explanationForm = useForm<ExplanationFormValues>({
    resolver: zodResolver(explanationFormSchema),
    defaultValues: {
      team1: "",
      team2: "",
      prediction: "",
      keyFactors: "",
    },
  });

  const summaryForm = useForm<SummaryFormValues>({
    resolver: zodResolver(summaryFormSchema),
    defaultValues: {
      team1: "",
      team2: "",
      predictedWinner: "",
      keyFactors: "",
      potentialOutcomes: "",
    },
  });

  async function onExplanationSubmit(values: ExplanationFormValues) {
    setExplanationLoading(true);
    setExplanationResult(null);
    try {
      const result = await explainMatchPrediction(values);
      setExplanationResult(result.explanation);
      toast({ title: "Explanation Generated", description: "AI explanation successfully generated." });
    } catch (error: any) {
      console.error("Error generating explanation:", error);
      let description = "Failed to generate explanation. Please try again.";
      // Handle potential 503 error specifically
      if (error.message && (error.message.includes("503") || error.status === 503)) {
        description = "The AI model is currently overloaded or unavailable. Please try again later.";
      } else if (error.message) {
        description = `Failed to generate explanation: ${error.message.substring(0, 100)}`; // Truncate long messages
      }
      toast({
        variant: "destructive",
        title: "Error Generating Explanation",
        description: description,
      });
    } finally {
      setExplanationLoading(false);
    }
  }

  async function onSummarySubmit(values: SummaryFormValues) {
    setSummaryLoading(true);
    setSummaryResult(null);
    try {
        const result = await generateMatchSummary(values);
        setSummaryResult(result.summary);
        toast({ title: "Summary Generated", description: "AI summary successfully generated." });
    } catch (error: any) {
        console.error("Error generating summary:", error);
        let description = "Failed to generate summary. Please try again.";
        // Handle potential 503 error specifically
        if (error.message && (error.message.includes("503") || error.status === 503)) {
            description = "The AI model is currently overloaded or unavailable. Please try again later.";
        } else if (error.message) {
             description = `Failed to generate summary: ${error.message.substring(0, 100)}`; // Truncate long messages
        }
        toast({
            variant: "destructive",
            title: "Error Generating Summary",
            description: description,
        });
    } finally {
        setSummaryLoading(false);
    }
}


  return (
    // Use grid-cols-1 by default, md:grid-cols-2 for medium screens and up
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg"> {/* Consistent title size */}
            <Sparkles className="text-primary h-5 w-5" /> {/* Ensure icon size */}
            Explain Match Prediction
          </CardTitle>
          <CardDescription>
            Enter match details to get an AI-powered explanation of the prediction.
          </CardDescription>
        </CardHeader>
        <Form {...explanationForm}>
          <form onSubmit={explanationForm.handleSubmit(onExplanationSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={explanationForm.control}
                name="team1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team 1</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Mumbai Indians" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={explanationForm.control}
                name="team2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team 2</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Chennai Super Kings" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={explanationForm.control}
                name="prediction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prediction</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Mumbai Indians to win" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={explanationForm.control}
                name="keyFactors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Factors</FormLabel>
                    <FormControl>
                        <Textarea placeholder="e.g., Recent form, head-to-head record, player availability" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit" disabled={explanationLoading}>
                {explanationLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Explain Prediction
              </Button>
            </CardFooter>
          </form>
        </Form>
        {explanationResult && (
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Explanation:</h3>
            <p className="text-sm text-muted-foreground bg-secondary p-4 rounded-md whitespace-pre-wrap">{explanationResult}</p>
          </CardContent>
        )}
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg"> {/* Consistent title size */}
            <Sparkles className="text-primary h-5 w-5" /> {/* Ensure icon size */}
            Generate Match Summary
          </CardTitle>
          <CardDescription>
            Provide match details to generate a concise AI summary.
          </CardDescription>
        </CardHeader>
        <Form {...summaryForm}>
            <form onSubmit={summaryForm.handleSubmit(onSummarySubmit)}>
                <CardContent className="space-y-4">
                    <FormField
                        control={summaryForm.control}
                        name="team1"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Team 1</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Royal Challengers Bangalore" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={summaryForm.control}
                        name="team2"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Team 2</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Kolkata Knight Riders" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={summaryForm.control}
                        name="predictedWinner"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Predicted Winner</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Kolkata Knight Riders" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={summaryForm.control}
                        name="keyFactors"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Key Factors</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="e.g., Pitch conditions, player form, team composition" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={summaryForm.control}
                        name="potentialOutcomes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Potential Outcomes</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="e.g., High-scoring game, close finish, potential impact players" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button type="submit" disabled={summaryLoading}>
                        {summaryLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Generate Summary
                    </Button>
                </CardFooter>
            </form>
        </Form>
        {summaryResult && (
            <CardContent>
                <h3 className="text-lg font-semibold mb-2">Summary:</h3>
                <p className="text-sm text-muted-foreground bg-secondary p-4 rounded-md whitespace-pre-wrap">{summaryResult}</p>
            </CardContent>
        )}
      </Card>
    </div>
  );
}
