import {GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,} from '@google/generative-ai'
const api_key='AIzaSyBPdR2xlDAGIC202yO8b48-fRGF_EDd81k';
// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  
  // const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(api_key);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response=result.response;
    console.log(response.text());
    return response.text

  }
  export default run;
  
//   run('10 best warriors in mahabharat');