const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const questions = [
  "How confident do you feel in your mathematics and science abilities? (Rate from 1 to 5, where 1 is not confident and 5 is very confident)",

  "Describe a recent academic project or assignment you are particularly proud of. What skills did you utilize to complete it?",

  "Have you ever engaged in coding or programming? If yes, what languages have you tried, and what did you create",

  "Rate your proficiency in using computers and software applications (such as word processors, spreadsheets, and presentation tools) from 1 to 5.",

  "How comfortable are you with writing essays or reports? (Rate from 1 to 5)",

  "What subjects are you most passionate about, and why?",

  "Describe a topic or concept you learned outside your school curriculum that fascinated you.",

  "What extracurricular activities do you participate in (e.g., sports, arts, clubs)? How do these activities reflect your interests or passions",

  "Have you taken any initiatives or led any projects within these activities? Describe your role and the impact of your work.",

  "Name 3 caeer path are you considering pursuing after A-Level exams? Why does this particular paths interest you?",

  "Do you prefer to work individually or as part of a team? Explain why",

  "Describe how you organize and prioritize your schoolwork and extracurricular activities.",

];

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCrDL4_pnzcCoOnRo8KTGhJwR8rjtiNcwc";

let rep = "";

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
            text: "act like a career counselor using the following question and answers i give in next input write 3 paragraphs that describe me highlighting my passion and skills and personality (each paragraph must at least 100 words) then suggest me most suitable 5 jobs for me answer shold be like {paragraph1, paragraph2}  {careertitle:title, description:description about the career, skills:[skills needed], if you dont satisfy the answers given to following questions dont answer and just say answers are not good enough to give a output politely",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userMessage);
  const response = result.response;
  rep = response.text();
}
app.options("/api/submitFormData", cors());

app.post("/api/submitFormData", async (req, res) => {
  // Handle the form data here
  const formData = req.body;

  // You can perform additional processing or save the data to a database
  let prompt = `
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
    
    im a srilankan student using these questions and answers describe me as long as you can and suggest me 6 careers paragrahs must be natural language and be descriptive and long as you can job suggestion mus have a descriptio technical skills,soft skills finally give me some advice to match up with the job market  `;

  await runChat(prompt);
  const cleanedResponse = rep.replace(/\*\*/g, "");
  console.log(`Reply generated! - ${formData.name}`);

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.json({ success: true, message: cleanedResponse });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
