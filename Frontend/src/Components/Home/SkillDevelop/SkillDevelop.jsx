import React from "react";
import "./SkillDevelop.css";

const SkillDevelop = () => {
  return (
    <>
      <section className="skillDevelop">
        <div className="container d-flex align-items-center wrapper p-4">
          <div className="col-12 d-flex">
            <div className="col-lg-8 col-sm-12 ">
              <h1 className=" skillTitle">
                <span className="text-success">Soft-Skill</span> Development
              </h1>
              <p className="skillText mt-3">
                Elevate your success with Future Lanka Foundation's Soft Skill
                Development program. Enhance crucial skills like communication,
                teamwork, adaptability, and leadership through tailored modules
                and engaging workshops. Invest in your future success – join us
                on a transformative journey towards enhanced interpersonal
                skills and career excellence.
              </p>
              <div className="skillCTA">
                <button className="btn btn-outline-success mt-3 ">
                  Start Enhancing Your Skills Today!
                </button>
              </div>
            </div>
            <div className="col-lg-4 "></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillDevelop;
