import React from "react";
import TextAreaInput from "./TextAreaInput";
import AI from "./aibot.gif"; // Adjust the path to the image
import { getCapitalizedFirstName } from "../Utils/FormatName";
import Footer from "../Footer/Footer";

const FormPage4 = ({
  formData,
  handleChange,
  validateFourth,
  q4error,
  questionList,
  pageIndex,
  setpageIndex,
}) => {
  return (
    <section className="form">
      <div className="container pt-5 pb-5 d-lg-flex ">
        <div className="col-lg-6">
          <div className="bg-success rounded-3 text-light p-5">
            <h3 className="text-center">
            Identify Your True Potential with CareerWizard AI Bot
            </h3>
            <div>
              <TextAreaInput
                question={questionList.q11}
                name="q11"
                value={formData.q11}
                onChange={handleChange}
              />

              <TextAreaInput
                question={questionList.q12}
                name="q12"
                value={formData.q12}
                onChange={handleChange}
              />

              <TextAreaInput
                question={questionList.q13}
                name="q13"
                value={formData.q13}
                onChange={handleChange}
              />

              <TextAreaInput
                question={questionList.q14}
                name="q14"
                value={formData.q14}
                onChange={handleChange}
              />

              <p className="text-danger">{q4error}</p>

              <div className="d-flex">
                <button
                  onClick={() => setpageIndex(pageIndex - 1)}
                  className="btn btn-warning"
                >
                  Back
                </button>
                <button
                  onClick={() => validateFourth()}
                  className="btn btn-warning ms-auto"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-lg-5 d-flex align-items-center">
          <div className="text-center py-3">
            <h2>
              You are Almost There
              <span className="text-success">
                {` ${getCapitalizedFirstName(formData.name)},`}
              </span>
              {" Let's Explore Your Interests and Goals "}
            </h2>
            <p className="text-center">
              Reflect on your activities, leadership, and career aspirations.
            </p>
            <div className="d-flex justify-content-center">
              <img
                src={AI}
                alt="AI Illustration"
                className="img-fluid"
                width={350}
              />
            </div>
            <p className="text-secondary text-center">
              Fill the form and click "Finish" to Complete
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default FormPage4;
