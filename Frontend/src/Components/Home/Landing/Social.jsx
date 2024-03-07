import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin    } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <div className=" col-12 pt-5  ">
        <div className="col-12 col-sm-5 socialTitle text-secondary">Follow us on Social Media:</div>

        <div className="col-12 d-flex socialPack pt-2">
          <div className="socialIcon">
            <FaFacebook size={25} />
          </div>
          <div className="ms-3 socialIcon">
            <FaInstagram  size={25} />
          </div>
          <div className="ms-3 socialIcon">
            <FaYoutube  size={25} />
          </div>
          <div className="ms-3 socialIcon">
            <FaLinkedin  size={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
