import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import AI from "./aibot.gif";
import { getCapitalizedFirstName } from "../Utils/FormatName";

const Report = ({ name, res }) => {
  useEffect(() => {
    const textarea = document.getElementById("result");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [res.message]);

  return (
    <>
      <section className="">
        <div className=" d-lg-flex container py-5">
          <div className="col-lg-4 p-5 d-flex ">
            <div className="text-center py-3">
              <h2>
                Results for You{" "}
                <span className="text-success">
                  {getCapitalizedFirstName(name)}!
                </span>
              </h2>
              <p className="text-center">Personalized insights just for you!</p>
              <div className="d-flex justify-content-center">
                <img
                  src={AI}
                  alt="AI Illustration"
                  className="img-fluid"
                  width={300}
                />
              </div>
              <p className="text-center text-secondary">
                You know yourself best. Use these suggestions to start your
                journey. Research well and choose what fits your goals and
                circumstances.
              </p>
              <h6>Good Luck for your career journey!</h6>
            </div>
          </div>
          <div className="col-lg-8  ">
            <textarea
              className="col-12 border-0 bg-success text-light p-5 rounded-3 text-justify"
              rows={4} // Set minimum rows
              id="result"
              name="result"
              value={res.message}
              readOnly
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Report;
