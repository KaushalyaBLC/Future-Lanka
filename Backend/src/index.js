const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
app.use(cors());

const mysql = require("mysql");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "bwtzqcmyvlh6mnm9pvjo-mysql.services.clever-cloud.com",
  user: "uptspqyo6yqcbgpw",
  password: "1VzhshojVwATrQnGQsvu",
  database: "bwtzqcmyvlh6mnm9pvjo",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});



async function insertUserData(formData) {
  const telNo = parseInt(formData.telNo);
  const age = parseInt(formData.age);

  // Check if the telNo already exists in the database
  connection.query(
    "SELECT * FROM user WHERE telNo = ?",
    [telNo],
    (err, results) => {
      if (err) {
        console.error("Error checking telNo in database: ", err);
        return;
      }

      // If the telNo exists, update the existing row
      if (results.length > 0) {
        const sql =
          "UPDATE user SET name = ?, age = ?, gender = ?, email = ?, educationLevel = ?, stream = ?, combination = ?, degree = ? WHERE telNo = ?";
        const values = [
          formData.name,
          age,
          formData.gender,
          formData.email,
          formData.educationLevel,
          formData.stream,
          formData.combination,
          formData.degree,
          telNo,
        ];

        connection.query(sql, values, (err, result) => {
          if (err) {
            console.error("Error updating form data in MySQL: ", err);
            return;
          }
          console.log("Form data updated in MySQL");
        });
      } else {
        // If the telNo does not exist, insert a new row
        const sql =
          "INSERT INTO user (telNo, name, age, gender, email, educationLevel, stream, combination, degree) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const values = [
          telNo,
          formData.name,
          age,
          formData.gender,
          formData.email,
          formData.educationLevel,
          formData.stream,
          formData.combination,
          formData.degree,
        ];

        connection.query(sql, values, (err, result) => {
          if (err) {
            console.error("Error inserting form data into MySQL: ", err);
            return;
          }
          console.log("Form data inserted into MySQL");
        });
      }
    }
  );
}

async function insertReportData(formData,rep) {
  const sql =
  "INSERT INTO report(s1, s2, s3, s4, s5, s6, s7, s8, s9, r1, r2, r3, r4, r5, r6, r7, r8, r9, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, result) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    formData.subject1,
    formData.subject2,
    formData.subject3,
    formData.subject4,
    formData.subject5,
    formData.subject6,
    formData.subject7,
    formData.subject8,
    formData.subject9,
    formData.result1,
    formData.result2,
    formData.result3,
    formData.result4,
    formData.result5,
    formData.result6,
    formData.result7,
    formData.result8,
    formData.result9,
    formData.q1,
    formData.q2,
    formData.q3,
    formData.q4,
    formData.q5,
    formData.q6,
    formData.q7,
    formData.q8,
    formData.q9,
    formData.q10,
    formData.q11,
    formData.q12,
    formData.q13,
    formData.q14,
    rep
  ];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting report data into MySQL: ", err);
      return;
    }
    console.log("Report data inserted into MySQL");
  });
}

const questions = [
  "How confident do you feel in your mathematics and science abilities? (Rate from 1 to 5, where 1 is not confident and 5 is very confident)",

  "Describe some notable academic achievements you attained after the age of 15 years ",

  "Have you ever engaged in coding or programming? ",

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
            text: "act like a career counselor using the following question and answers i give in next input write 3 paragraphs that describe me highlighting my passion and skills and personality (each paragraph must at least 100 words) if answers are not good enough warn them and give a output acording to given answers if answers are not related to questions dont answer and just say answers are not good enough to give a output politely",
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
  let prompt = "";
  if (formData.educationLevel === "preol") {
    prompt = `this is questions and answer list
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
    
    Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality then please provide detailed information about 5 higher education paths the user could consider pursuing.each path should describe one by one
    answer should be like {higher education path,its job opportunities, its demand and softskills needed} only recommend a sport if they has national or international level achievement use natural language and describe as much as you can
    `;
  } else if (formData.educationLevel === "ol") {
    prompt = `i'm a ${formData.age}} old student who considering for higher education this is questions and answer list
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
    and this is the GCE O/L exam result sheet
    ${formData.subject1}-${formData.result1},
    ${formData.subject2}-${formData.result2},
    ${formData.subject3}-${formData.result3},
    ${formData.subject4}-${formData.result4},
    ${formData.subject5}-${formData.result5},
    ${formData.subject6}-${formData.result6},
    ${formData.subject7}-${formData.result7},
    ${formData.subject8}-${formData.result8},
    ${formData.subject9}-${formData.result9},
    Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality using 3 paragraphs then please provide detailed information about '5 higher education paths' the user could consider pursuing.each path should describe one by one
    answer should be like {higher education path,its job opportunities, its demand and softskills needed} only recommend a sport if they has national or international level achievement use natural language and describe each path as much as you can
    `;
  } else if (formData.educationLevel === "preal") {
    prompt = `i'm a srilankan student who following GCE A/L examination in ${formData.stream} and i learn ${formData.combination} this is questions and answer list
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
    ${questions[12]}-${formData.q13},
    ${questions[13]}-${formData.q14},
    
    Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality using well described 3 paragraphs, then please provide detailed information about '5 career paths' the user could consider pursuing.each path should describe one by one 
    answer should be like {career, career description(describe as long as possible), softskill needed, education path for that career} only recommend a sport if they has national or international level achievement use natural language and describe each path as much as you can answers should based on the data provide.
    `;
  } else if (formData.educationLevel === "al") {
    prompt = `i'm a srilankan student who completed GCE A/L examination in ${formData.stream} and this is questions and answer list
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
    ${questions[12]}-${formData.q13},
    ${questions[13]}-${formData.q14},

    and this is my A/L examination results
    ${formData.subject1}-${formData.result1},
    ${formData.subject2}-${formData.result2},
    ${formData.subject3}-${formData.result3},
    
    Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality using well described 3 paragraphs, then please provide detailed information about '5 career paths' the user could consider pursuing.each path should describe one by one 
    answer should be like {career, career description(describe as long as possible), softskill needed, education path for that career} only recommend a sport if they has national or international level achievement use natural language and describe each path as much as you can answers should based on the data provide.
    `;
  } else if (formData.educationLevel === "degree") {
    prompt = `i'm a srilankan student who has a ${formData.degree} and this is questions and answer list
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
    ${questions[12]}-${formData.q13},
    ${questions[13]}-${formData.q14},
    
    Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality using well described 3 paragraphs, then please provide detailed information about '5 career paths' the user could consider.each path should describe one by one 
    answer should be like {career, career description(describe as long as possible), softskill needed, technical skills needed} only recommend a sport if they has national or international level achievement use natural language and describe each path as much as you can answers should based on the data provide.
    `;
  }

  // You can perform additional processing or save the data to a database

  await runChat(prompt);
  const cleanedResponse = rep.replace(/\*\*/g, "");
  rep = cleanedResponse;
  console.log(`Reply generated! - ${formData.name}`);

  insertUserData(formData);

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  
  res.json({ success: true, message: cleanedResponse });

  insertReportData(formData,cleanedResponse);
});

app.listen(PORT, () => {
  console.log(`Server is running on port  ${PORT}`);
});
