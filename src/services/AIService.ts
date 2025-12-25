
import { streamText } from 'ai';
import { openrouter } from '../lib/ai';

export default {
  async generateRecipe(prompt: string) {
    // console.log(prompt);

    const result = streamText({
      model: openrouter("meta-llama/llama-3.3-70b-instruct:free"),
      prompt,
      // Controlar el comportamiento de la IA
      system: 'Eres un experto en el tema'
    });

    // console.log(result);

    return result.textStream;
  }
};