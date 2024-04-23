import React from "react";
import AI from "./aibot.gif";

const GeneratingResult = ({ name }) => {
  return (
    <>
      <section className="waiting  d-flex align-items-center justify-content-center  ">
        <div className="container ">
          <div className="d-flex justify-content-center">
            <img src={AI} alt="Aibot image" className="pendinganim" />
          </div>
          <div>
            <h5 className="text-center">
              Hello <span className="text-success"> {name},</span>
              <br /> Passion identification bot is generating your result,
              Please Wait!
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneratingResult;
