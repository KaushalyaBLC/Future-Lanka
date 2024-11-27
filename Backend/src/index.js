// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

// Initialize Express app and set up port
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection setup
// The following section is commented out to avoid errors if the MySQL server is not set up.
// Uncomment and configure the credentials properly if a MySQL database is to be used.
/*
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "passionid",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});
*/

// Initial form data structure
const formDataTemplate = {
  name: "",
  age: "",
  gender: "",
  telNo: "",
  email: "",
  educationLevel: "",
  stream: "",
  combination: "",
  degree: "",
  subject1: "",
  subject2: "",
  subject3: "",
  subject4: "",
  subject5: "",
  subject6: "",
  subject7: "",
  subject8: "",
  subject9: "",
  result1: "",
  result2: "",
  result3: "",
  result4: "",
  result5: "",
  result6: "",
  result7: "",
  result8: "",
  result9: "",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  q10: "",
  q11: "",
  q12: "",
  q13: "",
  q14: "",
};

// Questions array
const questions = [
  "How confident do you feel in your mathematics and science abilities? (Rate from 1 to 5, where 1 is not confident and 5 is very confident)",
  "Describe some notable academic achievements you attained after the age of 15 years",
  "Have you ever engaged in coding or programming?",
  "If yes, what languages have you tried, and what did you create",
  "Rate your proficiency in using computers and software applications (such as word processors, spreadsheets, and presentation tools) from 1 to 5.",
  "How comfortable are you with writing essays or reports? (Rate from 1 to 5)",
  "What subjects are you most passionate about, and why?",
  "Describe a topic or concept you learned outside your school curriculum that fascinated you.",
  "Which sports have you participated in?",
  "What is the highest level of achievement have you attained in the sport(s) you participated in?",
  "Which extracurricular activities have you participated in, and mention any special positions or roles you hold in those activities?",
  "Have you taken any initiatives or led any projects? If so, please describe your role and the impact of your work.",
  "Name 3 careers are you considering pursuing? Why does this particular path interest you?",
  "Do you prefer to work individually or as part of a team? Explain why",
];

// Google Generative AI setup
const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.GOOGLE_API_KEY || "AIzaSyCrDL4_pnzcCoOnRo8KTGhJwR8rjtiNcwc";

let rep = "";

// Function to interact with Google Generative AI
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
        parts: [{ text: userMessage }],
      },
      {
        role: "model",
        parts: [
          {
            text: "act like a career counselor using the following question and answers i give in next input write 3 paragraphs that describe me highlighting my passion and skills and personality (each paragraph must at least 100 words) if answers are not good enough warn them and give a output according to given answers",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userMessage);
  const response = result.response;
  rep = response.text();
}

// Endpoint to handle form data submission
app.post("/api/submitFormData", async (req, res) => {
  let formData = { ...formDataTemplate, ...req.body };
  let prompt = generatePrompt(formData);

  await runChat(prompt);

  const cleanedResponse = rep.replace(/\*\*/g, "");
  rep = cleanedResponse;
  console.log(`Reply generated! - ${formData.name}`);

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.json({ success: true, message: cleanedResponse });

  // If MySQL database is being used, uncomment the following code to insert data into the database.
  /*
  const testData = extractTestData(formData);
  const resultData = { result: cleanedResponse };

  const sql = "INSERT INTO userdata (Name, Age, TelNo, Email, Education, Field, Answers, Result) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    formData.name,
    formData.age,
    formData.telNo,
    formData.email,
    formData.educationLevel,
    `${formData.stream}${formData.combination}${formData.degree}`,
    JSON.stringify(testData),
    JSON.stringify(cleanedResponse),
  ];

  db.query(sql, values, (err) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      return;
    }
    console.log("Data inserted into Database");
  });
  */
});

// Function to generate the prompt based on form data
function generatePrompt(formData) {
  let prompt = "";
  switch (formData.educationLevel) {
    case "preol":
      prompt = `
        this is questions and answer list
        ${questions[0]}-${formData.q1},
        ${questions[1]}-${formData.q2},
        ${questions[2]}-${formData.q3},
        ${questions[3]}-${formData.q4},
        ${questions[4]}-${formData.q5},
        ${questions[5]}-${formData.q6},
        ${questions[6]}-${formData.q7},
        ${questions[8]}-${formData.q9},
        ${questions[9]}-${formData.q10},
        ${questions[10]}-${formData.q11},
        ${questions[11]}-${formData.q12},
        ${questions[12]}-${formData.q13},
        ${questions[13]}-${formData.q14},
        Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character, their passion, skills, and personality. Then please provide detailed information about 5 higher education paths the user could consider pursuing. Each path should be described one by one, including higher education path, its job opportunities, its demand, and soft skills needed. Only recommend a sport if they have national or international level achievement. Use natural language and describe as much as you can.
      `;
      break;
    case "ol":
      prompt = `
        I'm a ${formData.age} year old student considering higher education. This is the questions and answer list:
        ${questions[0]}-${formData.q1},
        ${questions[1]}-${formData.q2},
        ${questions[2]}-${formData.q3},
        ${questions[3]}-${formData.q4},
        ${questions[4]}-${formData.q5},
        ${questions[5]}-${formData.q6},
        ${questions[6]}-${formData.q7},
        ${questions[8]}-${formData.q9},
        ${questions[9]}-${formData.q10},
        ${questions[10]}-${formData.q11},
        ${questions[11]}-${formData.q12},
        ${questions[12]}-${formData.q13},
        ${questions[13]}-${formData.q14},
        And this is the GCE O/L exam result: ${formData.subject1}-${formData.result1}, ${formData.subject2}-${formData.result2}, ${formData.subject3}-${formData.result3}, ${formData.subject4}-${formData.result4}, ${formData.subject5}-${formData.result5}, ${formData.subject6}-${formData.result6}, ${formData.subject7}-${formData.result7}, ${formData.subject8}-${formData.result8}, ${formData.subject9}-${formData.result9}. Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character, their passion, skills, and personality. Then please provide detailed information about 5 higher education paths the user could consider pursuing. Each path should be described one by one, including higher education path, its job opportunities, its demand, and soft skills needed. Only recommend a sport if they have national or international level achievement. Use natural language and describe as much as you can.
      `;
      break;
    case "al":
      prompt = `
        I'm a ${formData.age} year old student considering higher education. This is the questions and answer list:
        ${questions[0]}-${formData.q1},
        ${questions[1]}-${formData.q2},
        ${questions[2]}-${formData.q3},
        ${questions[3]}-${formData.q4},
        ${questions[4]}-${formData.q5},
        ${questions[5]}-${formData.q6},
        ${questions[6]}-${formData.q7},
        ${questions[8]}-${formData.q9},
        ${questions[9]}-${formData.q10},
        ${questions[10]}-${formData.q11},
        ${questions[11]}-${formData.q12},
        ${questions[12]}-${formData.q13},
        ${questions[13]}-${formData.q14},
        And this is the GCE A/L exam result: ${formData.subject1}-${formData.result1}, ${formData.subject2}-${formData.result2}, ${formData.subject3}-${formData.result3}, ${formData.subject4}-${formData.result4}, ${formData.subject5}-${formData.result5}, ${formData.subject6}-${formData.result6}, ${formData.subject7}-${formData.result7}, ${formData.subject8}-${formData.result8}, ${formData.subject9}-${formData.result9}. Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character, their passion, skills, and personality. Then please provide detailed information about 5 higher education paths the user could consider pursuing. Each path should be described one by one, including higher education path, its job opportunities, its demand, and soft skills needed. Only recommend a sport if they have national or international level achievement. Use natural language and describe as much as you can.
      `;
      break;
  }
  return prompt;
}

// Function to extract test data
// Uncomment this function if needed to process form data
/*
function extractTestData(formData) {
  return Object.fromEntries(
    Object.entries(formData).filter(([key]) => key.startsWith("q"))
  );
}
*/

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
