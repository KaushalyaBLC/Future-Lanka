import React from "react";
import TextAreaInput from "./TextAreaInput";

const FormPage2 = ({
  formData,
  handleChange,
  validateSecond,
  q2error,
  questionList,
  pageIndex,
  setpageIndex,
}) => {
  return (
    <>
      <div className="col-12  form ">
        <div className="registerwrap col-lg-6 border border-3 rounded border-success">
          <h3 className="text-center">
            Identify Your True Potential with Future Lanka Passion
            Identification Bot
          </h3>
          <div>
            <TextAreaInput
              question={questionList.q1}
              name="q1"
              value={formData.q1}
              onChange={handleChange}
            />

            <TextAreaInput
              question={questionList.q2}
              name="q2"
              value={formData.q2}
              onChange={handleChange}
            />

            <div className="question-03">
              <label htmlFor="q3">{questionList.q3}</label>
              <br />
              <div className="col-12">
                <input
                  type="radio"
                  id="yes"
                  name="q3"
                  value="Yes"
                  checked={formData.q3 === "Yes"}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="yes">Yes</label>

                <input
                  type="radio"
                  id="no"
                  name="q3"
                  value="No"
                  checked={formData.q3 === "No"}
                  onChange={handleChange}
                  className="ms-3"
                  required
                />

                <label htmlFor="no">No</label>
              </div>
            </div>

            {formData.q3 === "Yes" && (
              <>
                {/*Only rendered if the user selected yes in q3 */}
                <TextAreaInput
                  question={questionList.q4}
                  name="q4"
                  value={formData.q4}
                  onChange={handleChange}
                />
              </>
            )}

            <TextAreaInput
              question={questionList.q5}
              name="q5"
              value={formData.q5}
              onChange={handleChange}
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
    </>
  );
};

export default FormPage2;
