import React, { useState } from "react";
import "./CareerSearch.css";
import AIBot from "./aibot.gif";
import { useParams, Link } from "react-router-dom";

export const CareerSearch = () => {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container careerSearch py-5 px-3">
      <div className="d-lg-flex">
        <div className="col-lg-5">
          <h1 className="text-center">
            Hello, <span className="text-success">I'm CareerWizard!</span>
          </h1>
          <h6 className="text-secondary text-center">
            Ready to find your dream career? Just type the name of a career and
            get comprehensive information instantly!
          </h6>
          <div className="d-flex justify-content-center">
            <img src={AIBot} alt="CareerWizard Bot" width={350} />
          </div>
        </div>
        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-center">
          <input
            type="text"
            className="col-9 form-control"
            placeholder="Enter the career you need to know about"
            required
            value={inputValue}
            onChange={handleInputChange}
          />
          <div>
            <Link to={`/career/search/${inputValue}`} className="cluster text-dark">
              <button className="btn btn-success m-2" >
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
