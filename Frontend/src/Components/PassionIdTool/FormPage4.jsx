import React from "react";
import TextAreaInput from "./TextAreaInput";

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
    <>
      <div className="col-12  form ">
        <div className="registerwrap  col-lg-6 border border-3 rounded border-success ">
          <h3 className="text-center">
            Identify Your True Potential with Future Lanka Passion
            Identification Bot
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

            <div className="col-12 d-flex">
              <button
                onClick={() => setpageIndex(pageIndex - 1)}
                className="btn btn-warning"
              >
                Back
              </button>
              <button
                onClick={() => validateFourth()}
                className="btn btn-warning ms-auto "
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage4;
