const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const questions = [
    "What hobbies or activities do you enjoy during your free time?",
    "Identify your top strengths, considering communication, problem-solving, creativity, technical skills, interpersonal skills, leadership skills, and analytical skills.",
    "What is your highest level of education, and is it in a specific field?",
    "What causes or topics are you most passionate about?",
    "Name two or three values that are crucial for you in a career. Explain why these values are important to you and how they influence your choices.(ex:-sustainability,challenging,innovation,helping others etc.)",
    "Do you prefer working independently or collaboratively? Describe your ideal work environment (e.g., office, outdoor, remote).",
    "What aspects of project work motivate you the most? Do you enjoy the initial problem-solving phase, the process of working towards a solution, or the completion of long-term projects?",
    "How comfortable are you with technology, especially considering its rapid advancements?",
    "Share a brief insight into your long-term career goals. What kind of impact do you want to make? (Optional)",
    "What salary range are you targeting in your future career? (Optional)",
    "Are there specific companies or industries you're interested in working for? Why? (Optional)",
    "Describe the work-life balance you aim for and how important flexibility is in your career.",
  ];

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCrDL4_pnzcCoOnRo8KTGhJwR8rjtiNcwc";

let rep="";



async function runChat(userMessage) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.65,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {
            text: userMessage,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "using the following question and answers i give in next input write 2 paragraphs that describe me highlighting my passion and skills(each paragraph must at least 100 words) then suggest me most suitable 5 jobs for me answer shold be like {paragraph1:[paragraph1], paragraph2:[paragraph2]}  {careertitle:title, description:description about the career, skills:[skills needed], salary-range:salary range in lkr",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userMessage);
  const response = result.response;
  rep=response.text();
}

app.post("/api/submitFormData", async (req, res) => {
  // Handle the form data here
  const formData = req.body;

  // You can perform additional processing or save the data to a database
    let prompt=`
    this is questions and answer list
    ${questions[0]}-${formData.q1},
    ${questions[1]}-${formData.q2},
    ${questions[2]}-${formData.q3},
    ${questions[3]}-${formData.q4},
    ${questions[4]}-${formData.q5},
    ${questions[5]}-${formData.q6},
    ${questions[6]}-${formData.q7},
    ${questions[7]}-${formData.q8},
    ${questions[8]}-${formData.q9},
    ${questions[9]}-${formData.q10},
    ${questions[10]}-${formData.q11},
    ${questions[11]}-${formData.q12},
    
    im a student using these questions and answers describe me as long as you can and suggest me 6 careers paragrahs must be natural language and be descriptive and long as you can job suggestion mus have a descriptio technical skills,soft skills and salary range finally give me some advice to match up with the job market  `


    await runChat(prompt);
    const cleanedResponse = rep.replace(/\*\*/g, '');
    console.log("Reply generated!");
    
  res.json({ success: true, message:cleanedResponse });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
