require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const MEMBERS = [
  { name: "Bình", telegram_id: "@teddyIV" },
  { name: "Quân", telegram_id: "@quanluon " },
  { name: "Đạt", telegram_id: "@datnt2996" },
  { name: "Thanh", telegram_id: "@nguyenthanh21071994" },
  { name: "Tiến", telegram_id: "@TitusPham888" },
  { name: "Gia Bảo", telegram_id: "@baronha" },
  { name: "Phong Bảo", telegram_id: "@npbao" },
  { name: "Tuấn", telegram_id: "@bevisng" },
  { name: "Trang", telegram_id: "@Trang91296" },
  { name: "Khánh Ly", telegram_id: "@phanlekhanhly" },
  { name: "Trọng", telegram_id: "@vantrong2k" },
];

async function run() {
  const member = MEMBERS[Math.floor(Math.random() * MEMBERS.length)];
  const genAI = new GoogleGenerativeAI(process.env.BARD_AI_TOKEN);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `Làm thơ rủ nhậu bằng thơ, thể thơ lục bát, có bốn câu.`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text =
    response
      .text()
      .split("\n")
      .map((sentence) =>
        sentence.replaceAll(",", "").replaceAll(".", "").trim()
      )
      .filter((sentence) => !!sentence)
      .join(",") + ".";

  console.log(`Gửi ${member.telegram_id}:.` + text);
}

run();
