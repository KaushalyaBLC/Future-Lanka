import React from "react";
import "./PassionTest.css";
import { useState,useEffect } from "react";
import Navigation from "../Navigation/Navigation";

const PassionTest = () => {

  

  const submitForm = async () => {
    
    try {
      const response = await fetch('http://localhost:5000/api/submitFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        
      });
      if (response.ok) {
        const result = await response.json();
        setres(result);
        console.log(result);
        // Optionally, you can handle the server response here
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  const questionList = {
    q1: "What hobies do you like to do in your free time?",

    q2: "What are your strong points, particularly in communication, problem-solving, creativity, technical skills, interpersonal skills, leadership skills, and analytical skills?",

    q3: "Tell me about your education level and field of study.",

    q4: "What topics or causes are you really passionate about, and how can you incorporate these into your career?",

    q5: "What values matter most to you in a job? Why are these significant, and how do they impact your decision-making?",

    q6: "Do you prefer working alone or as part of a team? Can you describe your ideal work environment, such as an office, outdoors, or remote setting?",

    q7: "What part of working on projects motivates you the most? Do you enjoy the initial problem-solving, the ongoing process, or the satisfaction of completing long-term projects?",

    q8: "How comfortable are you with technology, especially given its rapid advancements?",

    q9: "Share a glimpse into your long-term career goals. What kind of impact do you hope to achieve?",

    q10: "If you're comfortable, what salary range are you aiming for in your future career?",

    q11: "Are there specific companies or industries you're keen on working in? What attracts you to them?",

    q12: "Describe the work-life balance you're aiming for and how crucial flexibility is in your career.",
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
  const [res,setres]=useState("");

  

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
      
      setpageIndex(4);
      submitForm();
    }
  };

 // Empty dependency array means it will run only once

  if (pageIndex === 1) {
    return (
      <>
        <Navigation />
        <div className="col-12  form p-5">
          <div className="registerwrap p-5 col-lg-6 border border-3 rounded border-warning ">
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
              <button
                onClick={() => validateFirst()}
                className="btn btn-warning"
              >
               
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (pageIndex === 2) {
    return (
      <>
        <Navigation />
        <div className="col-12  form p-5">
          <div className="registerwrap p-5 col-lg-6 border border-3 rounded border-warning">
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
              <button
                onClick={() => validateSecond()}
                className="btn btn-warning"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (pageIndex === 3) {
    return (
      <>
        <Navigation />
        <div className="col-12  form p-5">
          <div className="registerwrap p-5 col-lg-6 border border-3 rounded border-warning ">
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
              <button
                onClick={() => validateThird()}
                className="btn btn-warning"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (pageIndex === 4) {
   
    return (
      <>
      <Navigation/>
        <div className="col-12  form p-5">
          <div className="registerwrap p-5 col-lg-8 border border-3 rounded border-warning ">
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
              
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PassionTest;
