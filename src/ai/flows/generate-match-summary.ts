'use server';
/**
 * @fileOverview A Genkit flow for generating a brief summary of the match prediction, highlighting the most important factors and potential outcomes.
 *
 * - generateMatchSummary - A function that handles the generation of match summaries.
 * - GenerateMatchSummaryInput - The input type for the generateMatchSummary function.
 * - GenerateMatchSummaryOutput - The return type for the generateMatchSummary function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateMatchSummaryInputSchema = z.object({
  team1: z.string().describe('The name of the first team.'),
  team2: z.string().describe('The name of the second team.'),
  predictedWinner: z.string().describe('The predicted winner of the match.'),
  keyFactors: z.string().describe('The key factors influencing the prediction.'),
  potentialOutcomes: z.string().describe('Potential outcomes of the match.'),
});
export type GenerateMatchSummaryInput = z.infer<typeof GenerateMatchSummaryInputSchema>;

const GenerateMatchSummaryOutputSchema = z.object({
  summary: z.string().describe('A brief summary of the match prediction.'),
});
export type GenerateMatchSummaryOutput = z.infer<typeof GenerateMatchSummaryOutputSchema>;

export async function generateMatchSummary(input: GenerateMatchSummaryInput): Promise<GenerateMatchSummaryOutput> {
  return generateMatchSummaryFlow(input);
}

const generateMatchSummaryPrompt = ai.definePrompt({
  name: 'generateMatchSummaryPrompt',
  input: {
    schema: z.object({
      team1: z.string().describe('The name of the first team.'),
      team2: z.string().describe('The name of the second team.'),
      predictedWinner: z.string().describe('The predicted winner of the match.'),
      keyFactors: z.string().describe('The key factors influencing the prediction.'),
      potentialOutcomes: z.string().describe('Potential outcomes of the match.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A brief summary of the match prediction.'),
    }),
  },
  prompt: `Create a brief summary of the IPL match prediction between {{team1}} and {{team2}}.\n\nThe predicted winner is {{predictedWinner}}.\n\nKey factors influencing the prediction: {{keyFactors}}\n\nPotential outcomes of the match: {{potentialOutcomes}}\n\nSummary: `,
});

const generateMatchSummaryFlow = ai.defineFlow<
  typeof GenerateMatchSummaryInputSchema,
  typeof GenerateMatchSummaryOutputSchema
>(
  {
    name: 'generateMatchSummaryFlow',
    inputSchema: GenerateMatchSummaryInputSchema,
    outputSchema: GenerateMatchSummaryOutputSchema,
  },
  async input => {
    const {output} = await generateMatchSummaryPrompt(input);
    return output!;
  }
);
