require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function run() {
  const genAI = new GoogleGenerativeAI(process.env.BARD_AI_TOKEN);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Làm thơ rủ nhậu bạn Gia Bảo trong 4 câu thơ lục bát.";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
