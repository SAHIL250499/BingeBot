import { GROQ_API_KEY } from "./constants";
import { createOpenAI as createGroq } from '@ai-sdk/openai';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: GROQ_API_KEY,
});

export default groq;
