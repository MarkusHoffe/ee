export interface AIMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AIRequestOptions {
  temperature?: number;
  maxTokens?: number;
  model?: string;
}

export interface AIResponse {
  content: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}
