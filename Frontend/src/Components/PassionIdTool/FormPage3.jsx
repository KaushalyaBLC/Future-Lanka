import React from "react";
import TextAreaInput from "./TextAreaInput";
import AI from "./aibot.gif";
import { getCapitalizedFirstName } from "../Utils/FormatName";
import Footer from "../Footer/Footer";

const FormPage3 = ({
  formData,
  handleChange,
  validateThird,
  q3error,
  questionList,
  pageIndex,
  setpageIndex,
}) => {
  return (
    <>
      <section className="form">
        <div className="container pt-5 pb-5 d-lg-flex flex-row-reverse ">
          <div>
            <div className="bg-success rounded-3 text-light p-5">
              <div className="">
                <h3 className="text-center">
                  Identify Your True Potential with CareerWizard AI Bot
                </h3>
                <div>
                  <TextAreaInput
                    question={questionList.q6}
                    name="q6"
                    value={formData.q6}
                    onChange={handleChange}
                  />

                  <TextAreaInput
                    question={questionList.q7}
                    name="q7"
                    value={formData.q7}
                    onChange={handleChange}
                  />

                  {formData.educationLevel !== "ol" &&
                    formData.educationLevel !== "preol" && (
                      <>
                        {/*This question only shows to above ol students */}
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
                        />
                      </>
                    )}

                  <TextAreaInput
                    question={questionList.q9}
                    name="q9"
                    value={formData.q9}
                    onChange={handleChange}
                  />

                  <label htmlFor="q10">{questionList.q10}</label>
                  <br />
                  <select
                    className="col-12"
                    id="q10"
                    name="q10"
                    value={formData.q10}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="schhol-level">
                      School/University Level
                    </option>
                    <option value="interschool-level">
                      Inter School/University Level
                    </option>
                    <option value="national-level">National Level</option>
                    <option value="international-level">
                      International Level
                    </option>
                  </select>

                  <p className="text-danger">{q3error}</p>

                  <div className="col-12 d-flex">
                    <button
                      onClick={() => setpageIndex(pageIndex - 1)}
                      className="btn btn-warning"
                    >
                      Back
                    </button>

                    <button
                      onClick={() => validateThird()}
                      className="btn btn-warning ms-auto"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="d-flex align-items-center col-lg-5">
            <div className="text-center py-3">
              <h2>
                Good Job
                <span className="text-success">
                  {" "}
                  {` ${getCapitalizedFirstName(formData.name)},`}
                </span>
                {" Let's Uncover Your Strengths and Passions "}
              </h2>
              <p className="text-center">
                Explore your academic and extracurricular interests!
              </p>
              <div className="d-flex justify-content-center">
                <img src={AI} alt="" className="img-fluid" width={350} />
              </div>
              <p className="text-center text-secondary">
                Fill the form and click "Next" to Continue
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default FormPage3;
