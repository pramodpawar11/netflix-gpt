import OpenAI from 'openai';
import { Open_Ai } from './constants';

const openAi = new OpenAI({
  apiKey:Open_Ai,
  dangerouslyAllowBrowser: true 
});
export default openAi;
