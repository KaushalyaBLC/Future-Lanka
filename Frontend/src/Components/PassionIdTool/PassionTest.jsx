import React from "react";
import "./PassionTest.css";
import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import AI from "./aibot.gif";

const PassionTest = () => {
  const submitForm = async () => {
    try {
      const response = await fetch(
        "https://future-lanka.onrender.com/api/submitFormData",
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

    q2: "Describe a recent academic project or assignment you are particularly proud of. What skills did you utilize to complete it?",

    q3: "Have you ever engaged in coding or programming? If yes, what languages have you tried, and what did you create",

    q4: "Rate your proficiency in using computers and software applications (such as word processors, spreadsheets, and presentation tools) from 1 to 5.",

    q5: "How comfortable are you with writing essays or reports? (Rate from 1 to 5)",

    q6: "What subjects are you most passionate about, and why?",

    q7: "Describe a topic or concept you learned outside your school curriculum that fascinated you.",

    q8: "What extracurricular activities do you participate in (e.g., sports, arts, clubs)? How do these activities reflect your interests or passions?",

    q9: "Have you taken any initiatives or led any projects within these activities? Describe your role and the impact of your work.",

    q10: "Name 3 career path are you considering pursuing after A-Levels? Why does this particular path interest you?",

    q11: "Do you prefer to work individually or as part of a team? Explain why",

    q12: "Describe how you organize and prioritize your schoolwork and extracurricular activities.",
  };

  const initialFormData = {
    name: "",
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
  };

  const [formData, setFormData] = useState(initialFormData);
  const [pageIndex, setpageIndex] = useState(1);
  const [q1error, setq1error] = useState("");
  const [q2error, setq2error] = useState("");
  const [q3error, setq3error] = useState("");
  const [res, setres] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateFirst = () => {
    if (
      formData.name == "" ||
      formData.q1 == "" ||
      formData.q2 == "" ||
      formData.q3 == "" ||
      formData.q4 == ""
    ) {
      setq1error("*Please fill the required sections before continue");
    } else {
      setpageIndex(2);
    }
  };

  const validateSecond = () => {
    if (
      formData.q5 == "" ||
      formData.q6 == "" ||
      formData.q7 == "" ||
      formData.q8 == ""
    ) {
      setq2error("*Please fill the required sections before continue");
    } else {
      setpageIndex(3);
    }
  };

  const validateThird = () => {
    if (
      formData.q9 == "" ||
      formData.q10 == "" ||
      formData.q11 == "" ||
      formData.q12 == ""
    ) {
      setq3error("*Please fill the required sections before continue");
    } else {
      submitForm();
      setpageIndex(4);
      
    }
  };

  if (pageIndex === 1) {
    return (
      <>
        <Navigation />
        <div className="col-12  form ">
          <div className="registerwrap col-lg-6 border border-3 rounded border-success ">
            <h3 className="text-center">
              Identify Your True Potential with Future Lanka Passion
              Identification Bot
            </h3>
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                className="col-12"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="q1">{questionList.q1}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q1"
                name="q1"
                value={formData.q1}
                onChange={handleChange}
                required
              />

              <label htmlFor="q2">{questionList.q2}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q2"
                name="q2"
                value={formData.q2}
                onChange={handleChange}
                required
              />

              <label htmlFor="q3">{questionList.q3}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q3"
                name="q3"
                value={formData.q3}
                onChange={handleChange}
                required
              />

              <label htmlFor="q4">{questionList.q4}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q4"
                name="q4"
                value={formData.q4}
                onChange={handleChange}
                required
              />
              <p className="text-danger">{q1error}</p>
              <div className="col-12 d-flex">
                <button onClick={() => ""} className="btn btn-warning">
                  Back
                </button>
                <button
                  onClick={() => validateFirst()}
                  className="btn btn-warning ms-auto"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else if (pageIndex === 2) {
    
    return (
      <>
        <Navigation />
        <div className="col-12  form ">
          <div className="registerwrap col-lg-6 border border-3 rounded border-success">
            <h3 className="text-center">
              Identify Your True Potential with Future Lanka Passion
              Identification Bot
            </h3>
            <div>
              <label htmlFor="q5">{questionList.q5}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q5"
                name="q5"
                value={formData.q5}
                onChange={handleChange}
                required
              />

              <label htmlFor="q6">{questionList.q6}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q6"
                name="q6"
                value={formData.q6}
                onChange={handleChange}
                required
              />

              <label htmlFor="q7">{questionList.q7}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q7"
                name="q7"
                value={formData.q7}
                onChange={handleChange}
                required
              />

              <label htmlFor="q8">{questionList.q8}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q8"
                name="q8"
                value={formData.q8}
                onChange={handleChange}
                required
              />
              <p className="text-danger">{q2error}</p>
              <div className="col-12 d-flex">
                <button
                  onClick={() => setpageIndex(pageIndex - 1)}
                  className="btn btn-warning"
                >
                  Back
                </button>
                <button
                  onClick={() => validateSecond()}
                  className="btn btn-warning ms-auto"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else if (pageIndex === 3) {
    return (
      <>
        <Navigation />
        <div className="col-12  form ">
          <div className="registerwrap  col-lg-6 border border-3 rounded border-success ">
            <h3 className="text-center">
              Identify Your True Potential with Future Lanka Passion
              Identification Bot
            </h3>
            <div>
              <label htmlFor="q9">{questionList.q9}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q9"
                name="q9"
                value={formData.q9}
                onChange={handleChange}
                required
              />

              <label htmlFor="q10">{questionList.q10}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q10"
                name="q10"
                value={formData.q10}
                onChange={handleChange}
                required
              />

              <label htmlFor="q11">{questionList.q11}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q11"
                name="q11"
                value={formData.q11}
                onChange={handleChange}
                required
              />

              <label htmlFor="q12">{questionList.q12}</label>
              <br />
              <textarea
                className="col-12"
                rows={2}
                cols={20}
                id="q12"
                name="q12"
                value={formData.q12}
                onChange={handleChange}
                required
              />
              <p className="text-danger">{q2error}</p>
              <div className="col-12 d-flex">
                <button
                  onClick={() => setpageIndex(pageIndex - 1)}
                  className="btn btn-warning"
                >
                  Back
                </button>
                <button
                  onClick={() => validateThird()}
                  className="btn btn-warning ms-auto "
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else if (pageIndex === 4) {
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
