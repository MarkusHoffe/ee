import OpenAI from "openai";

export const getOpenAIClient = () => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  return new OpenAI({ apiKey });
};
