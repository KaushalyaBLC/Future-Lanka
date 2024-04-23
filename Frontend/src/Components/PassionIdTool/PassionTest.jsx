import React from "react";
import "./PassionTest.css";
import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import AI from "./aibot.gif";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import FormPage4 from "./FormPage4";
import GeneratingResult from "./GeneratingResult";
import Report from "./Report"



const PassionTest = () => {
  const submitForm = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/submitFormData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const result = await response.json();
        setres(result);
        console.log(result);
        // Optionally, you can handle the server response here
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  const questionList = {
    q1: "How confident do you feel in your mathematics and science abilities? (Rate from 1 to 5, where 1 is not confident and 5 is very confident)",

    q2: "Describe some notable academic achievements you attained after the age of 15 years ",

    q3: "Have you ever engaged in coding or programming? ",

    q4: "If yes, what languages have you tried, and what did you create",

    q5: "Rate your proficiency in using computers and software applications (such as word processors, spreadsheets, and presentation tools) from 1 to 5.",

    q6: "How comfortable are you with writing essays or reports? (Rate from 1 to 5)",

    q7: "What subjects are you most passionate about, and why?",

    q8: "Describe a topic or concept you learned outside your school curriculum that fascinated you.",

    q9: "Which sports have you participated in?",

    q10: "What is the highest level of achievement have you attained in the sport(s) you participated in?",

    q11: "Which extracurricular activities have you participated in, and mention any special positions or roles you hold in those activities?",

    q12: "Have you taken any initiatives or led any projects? If so, please describe your role and the impact of your work.",

    q13: "Name 3 careers are you considering pursuing? Why does this particular path interest you?",

    q14: "Do you prefer to work individually or as part of a team? Explain why",
  };

  const initialFormData = {
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

  const [formData, setFormData] = useState(initialFormData);
  const [pageIndex, setpageIndex] = useState(1);
  const [q1error, setq1error] = useState("");
  const [q2error, setq2error] = useState("");
  const [q3error, setq3error] = useState("");
  const [q4error, setq4error] = useState("");
  const [res, setres] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const makeRequest =() => {

  }

  const validateFirst = () => {
    if (
      formData.name == "" ||
      formData.age == "" ||
      formData.telNo == "" ||
      formData.gender == "" ||
      formData.educationLevel == ""
    ) {
      setq1error("*Please fill the required sections before continue");
    } else {
      setpageIndex(2);
      setq1error("");
    }
  };

  const validateSecond = () => {
    if (
      formData.q1 == "" ||
      formData.q2 == "" ||
      formData.q3 == "" ||
      formData.q5 == ""
    ) {
      setq2error("*Please fill the required sections before continue");
    } else {
      setpageIndex(3);
      setq2error("");
    }
  };

  const validateThird = () => {
    if (formData.q6 == "" || formData.q7 == "" || formData.q9 == "") {
      setq3error("*Please fill the required sections before continue");
    } else {
      setpageIndex(4);
      setq3error("");
    }
  };

  const validateFourth = () => {
    if (formData.q10 == "" || formData.q11 == "" || formData.q12 == "") {
      setq4error("*Please fill the required sections before continue");
    } else {
      submitForm();
      setpageIndex(5);
      setq4error("");
    }
  };

  return (
    <>
      <Navigation />
      {pageIndex === 1 && (
        <FormPage1
          formData={formData}
          handleChange={handleChange}
          validateFirst={validateFirst}
          q1error={q1error}
        />
      )}

      {pageIndex === 2 && (
        <FormPage2
          formData={formData}
          handleChange={handleChange}
          validateSecond={validateSecond}
          q2error={q2error}
          questionList={questionList}
          pageIndex={pageIndex}
          setpageIndex={setpageIndex}
        />
      )}

      {pageIndex === 3 && (
        <FormPage3
          formData={formData}
          handleChange={handleChange}
          validateThird={validateThird}
          q3error={q3error}
          questionList={questionList}
          pageIndex={pageIndex}
          setpageIndex={setpageIndex}
        />
      )}

      {pageIndex === 4 && (
        <FormPage4
          formData={formData}
          handleChange={handleChange}
          validateFourth={validateFourth}
          q4error={q4error}
          questionList={questionList}
          pageIndex={pageIndex}
          setpageIndex={setpageIndex}
        />
      )}

      {(pageIndex === 5 && res==="") &&(
        <GeneratingResult name={formData.name} />
      )}

{(pageIndex === 5 && res!=="") &&(
        <Report 
        name={formData.name}
        res={res}
        />
      )}

      <Footer />
    </>
  );
  if (pageIndex === 1) {
    return (
      <>
        <Navigation />
        <FormPage1
          formData={formData}
          handleChange={handleChange}
          validateFirst={validateFirst}
          q1error={q1error}
        />
      </>
    );
  } else if (pageIndex === 2) {
    return (
      <>
        <FormPage2
          formData={formData}
          handleChange={handleChange}
          validateSecond={validateSecond}
          q2error={q2error}
          questionList={questionList}
          pageIndex={pageIndex}
          setpageIndex={setpageIndex}
        />
      </>
    );
  } else if (pageIndex === 3) {
    return (
      <>
        <Navigation />
        <FormPage3
          formData={formData}
          handleChange={handleChange}
          validateThird={validateThird}
          q3error={q3error}
          questionList={questionList}
          pageIndex={pageIndex}
          setpageIndex={setpageIndex}
        />
        <Footer />
      </>
    );
  } else if (pageIndex === 4) {
    return (
      <>
        <Navigation />
        <FormPage4
          formData={formData}
          handleChange={handleChange}
          validateFourth={validateFourth}
          q4error={q4error}
          questionList={questionList}
          pageIndex={pageIndex}
          setpageIndex={setpageIndex}
        />
      </>
    );
  } else if (pageIndex === 5) {
    if (res === "") {
      return (
        <>
          <section className="waiting  d-flex align-items-center justify-content-center  ">
            <div className="container ">
              <div className="d-flex justify-content-center">
                <img src={AI} alt="Aibot image" className="pendinganim" />
              </div>
              <div>
                <h5 className="text-center">
                  Hello <span className="text-success"> {formData.name},</span>
                  <br /> Passion identification bot is generating your result,
                  Please Wait!
                </h5>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          <Navigation />
          <div className="col-12  form">
            <div className="registerwrap col-lg-8 border border-3 rounded border-success ">
              <h3 className="text-center">
                Identify Your True Potential with Future Lanka Passion
                Identification Bot
              </h3>
              <div className="mt-4">
                <h5>Welcome {formData.name},</h5>
                <textarea
                  className="col-12"
                  rows={55}
                  cols={20}
                  id="result"
                  name="result"
                  value={res.message}
                  onChange={handleChange}
                />
                <p>
                  You know yourself better than anyone, Use these suggestions as
                  a starting point for self-discovery. Research thoroughly and
                  make choices aligned with your unique goals and circumstances.
                </p>
                <h6>Good Luck for your career journey!</h6>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
};

export default PassionTest;
