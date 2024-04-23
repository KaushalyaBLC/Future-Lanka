import React from 'react'
import TextInput from './TextInput'
import NumberInput from './NumberInput'
import TextAreaInput from './TextAreaInput'



const FormPage1 = ({ formData, handleChange, validateFirst, q1error }) => {
  return (
    <>
    <div className="col-12  form ">
          <div className="registerwrap col-lg-6 border border-3 rounded border-success ">
            <h3 className="text-center">
              Identify Your True Potential with Future Lanka Passion
              Identification Bot
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
                <div>
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
    </>
  )
}

export default FormPage1