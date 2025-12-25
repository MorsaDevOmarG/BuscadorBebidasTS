import { openrouter } from "@openrouter/ai-sdk-provider";
import { streamText } from 'ai';

export default {
  async generateRecipe(prompt: string) {
    // console.log(prompt);

    const result = streamText({
      model: openrouter('')
    });
  }
};