// umrah-travel-assistant.ts
'use server';

/**
 * @fileOverview AI-powered chatbot for answering questions about Umrah travel, visa requirements, and package details.
 *
 * - umrahTravelAssistant - A function that answers user questions related to Umrah travel.
 * - UmrahTravelAssistantInput - The input type for the umrahTravelAssistant function.
 * - UmrahTravelAssistantOutput - The return type for the umrahTravelAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UmrahTravelAssistantInputSchema = z.object({
  question: z.string().describe('The user question about Umrah travel, visa requirements, or package details.'),
});
export type UmrahTravelAssistantInput = z.infer<typeof UmrahTravelAssistantInputSchema>;

const UmrahTravelAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type UmrahTravelAssistantOutput = z.infer<typeof UmrahTravelAssistantOutputSchema>;

export async function umrahTravelAssistant(input: UmrahTravelAssistantInput): Promise<UmrahTravelAssistantOutput> {
  return umrahTravelAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'umrahTravelAssistantPrompt',
  input: {schema: UmrahTravelAssistantInputSchema},
  output: {schema: UmrahTravelAssistantOutputSchema},
  prompt: `You are a helpful AI assistant specializing in Umrah travel.
  Answer the following question about Umrah travel, visa requirements, and package details:
  
  Question: {{{question}}}
  `,
});

const umrahTravelAssistantFlow = ai.defineFlow(
  {
    name: 'umrahTravelAssistantFlow',
    inputSchema: UmrahTravelAssistantInputSchema,
    outputSchema: UmrahTravelAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
