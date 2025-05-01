'use server';
/**
 * @fileOverview Explains the reasoning behind match predictions using a local LLM.
 *
 * - explainMatchPrediction - A function that handles the explanation of match predictions.
 * - ExplainMatchPredictionInput - The input type for the explainMatchPrediction function.
 * - ExplainMatchPredictionOutput - The return type for the explainMatchPrediction function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ExplainMatchPredictionInputSchema = z.object({
  team1: z.string().describe('The name of the first team.'),
  team2: z.string().describe('The name of the second team.'),
  prediction: z.string().describe('The predicted outcome of the match.'),
  keyFactors: z.string().describe('Key factors influencing the predicted outcome.'),
});
export type ExplainMatchPredictionInput = z.infer<typeof ExplainMatchPredictionInputSchema>;

const ExplainMatchPredictionOutputSchema = z.object({
  explanation: z.string().describe('The LLM explanation of the match prediction.'),
});
export type ExplainMatchPredictionOutput = z.infer<typeof ExplainMatchPredictionOutputSchema>;

export async function explainMatchPrediction(input: ExplainMatchPredictionInput): Promise<ExplainMatchPredictionOutput> {
  return explainMatchPredictionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainMatchPredictionPrompt',
  input: {
    schema: z.object({
      team1: z.string().describe('The name of the first team.'),
      team2: z.string().describe('The name of the second team.'),
      prediction: z.string().describe('The predicted outcome of the match.'),
      keyFactors: z.string().describe('Key factors influencing the predicted outcome.'),
    }),
  },
  output: {
    schema: z.object({
      explanation: z.string().describe('The LLM explanation of the match prediction.'),
    }),
  },
  prompt: `You are an expert cricket analyst. Explain the reasoning behind the following match prediction, highlighting the key factors.

Team 1: {{{team1}}}
Team 2: {{{team2}}}
Prediction: {{{prediction}}}
Key Factors: {{{keyFactors}}}

Explanation:`,
});

const explainMatchPredictionFlow = ai.defineFlow<
  typeof ExplainMatchPredictionInputSchema,
  typeof ExplainMatchPredictionOutputSchema
>({
  name: 'explainMatchPredictionFlow',
  inputSchema: ExplainMatchPredictionInputSchema,
  outputSchema: ExplainMatchPredictionOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return {
    explanation: output!.explanation,
  };
});
