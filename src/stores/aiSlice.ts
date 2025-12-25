import { StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISlice = {
  recipe: string;
  isGenerating: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISlice> = (set) => ({
  recipe: "",

  isGenerating: false,

  generateRecipe: async (prompt) => {
    // console.log(prompt);

    set({
      recipe: "",
      isGenerating: true,
    });

    const data = await AIService.generateRecipe(prompt);

    for await (const textPart of data) {
      // console.log(textPart);

      set((state) => ({
        recipe: state.recipe + textPart,
      }));
    }

    set({
      isGenerating: false,
    });
  },
});
