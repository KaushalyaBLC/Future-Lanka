import React from "react";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import TextAreaInput from "./TextAreaInput";
import AI from "./aibot.gif";
import Footer from "../Footer/Footer";

const FormPage1 = ({ formData, handleChange, validateFirst, q1error }) => {
  return (
    <section className="form">
    <div className="container pt-5 pb-5 d-lg-flex  ">
      <div className="">
        <div className="bg-success rounded-3 text-light p-5">
        <div className=" ">
            <h3 className="text-center">
              Identify Your True Potential with CareerWizard AI Bot
            </h3>
            <div>
              <TextInput
                question="Name:"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={true}
              />

              <NumberInput
                question="Age:"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />

              <NumberInput
                question="Phone Number:"
                name="telNo"
                value={formData.telNo}
                onChange={handleChange}
              />

              <TextInput
                question="Email Address:"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required={false}
              />

              <label htmlFor="gender">Gender:</label>
              <br />
              <select
                className="col-12"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="educationLevel">
                Highest Education Qualification:
              </label>
              <br />
              <select
                className="col-12"
                id="educationLevel"
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select Education Level</option>
                <option value="preol">Following GCE O/L</option>
                <option value="ol">Completed GCE O/L</option>
                <option value="preal">Following GCE A/L</option>
                <option value="al">Completed GCE A/L</option>
                <option value="degree">
                  Following or Completed a Bachelor| Master| PHD Degree Program
                </option>
              </select>

              {formData.educationLevel === "ol" && (
                <div className="rounded">
                  <label>Enter Your O/L Results </label>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 9 }, (_, index) => (
                        <tr key={index}>
                          <td>
                            <input
                              type="text"
                              name={`subject${index + 1}`}
                              value={formData[`subject${index + 1}`]}
                              onChange={handleChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name={`result${index + 1}`}
                              value={formData[`result${index + 1}`]}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {formData.educationLevel === "preal" && (
                <>
                  <TextInput
                    question="Subject Stream:"
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    required={false}
                  />

                  <TextInput
                    question="Subject Combination (eg:- Combined Maths, Physics,Chemistry):"
                    name="combination"
                    value={formData.combination}
                    onChange={handleChange}
                    required={false}
                  />

                </>
              )}
              {formData.educationLevel === "al" && (
                <>
                  <label htmlFor="stream">Subject Stream:</label>
                  <br />
                  <input
                    className="col-12"
                    type="text"
                    id="stream"
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                  />
                  <label>Enter Your A/L Results </label>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 3 }, (_, index) => (
                        <tr key={index}>
                          <td>
                            <input
                              type="text"
                              name={`subject${index + 1}`}
                              value={formData[`subject${index + 1}`]}
                              onChange={handleChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name={`result${index + 1}`}
                              value={formData[`result${index + 1}`]}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {formData.educationLevel === "degree" && (
                <>
                   <TextInput
                    question="Degree Program"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    required={false}
                  />
                 
                </>
              )}

              <p className="text-light">{q1error}</p>
              
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
          <div className="text-center"></div>
        </div>
      </div>
      <div className="col-lg-1"></div>
      <div className="d-flex align-items-center col-lg-5">
      <div className="text-center py-3">
        <h2>
          Tell me about your
          <span className="text-success"> background </span>{" "}
        </h2>
        <p className="text-center">Your information will remain secure.</p>
        <div className="d-flex justify-content-center">
          <img src={AI} alt="" className="img-fluid" width={350} />
        </div>
        <p className="text-center text-secondary">Fill the form and click "Next" to Continue</p>
      </div>
      </div>
    </div>
    <Footer/>
    </section>
  );
};

export default FormPage1;
