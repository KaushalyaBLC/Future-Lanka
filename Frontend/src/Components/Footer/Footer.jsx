import React from "react";
import "./Footer.css";
import { IoLocation, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Logo from "../Navigation/logo.png";

const Footer = () => {
  return (
    <section className="bg-dark footer">
      <div className="flfooter d-flex text-light   flex-column flex-lg-row p-4 justify-content-center">
        <div className="col-lg-5 col-sm-12 p-3 f-block ">
          <h6>Career Pathfinder</h6>
          <p className="footerText">
            At Career Pathfinder, we are dedicated to guiding students and
            professionals in Sri Lanka towards fulfilling and successful
            careers. Through personalized guidance, extensive resources, and
            innovative tools, we help you uncover your passions, develop
            essential skills, and navigate your career path with confidence.
            Join us and start your journey to success today!
          </p>
          <div className="col-12 d-flex grey justify-content ">
            <IoLocation />
            <address className="footerText ms-3">
              F.C.T, Kelaniya, Sri Lanka
            </address>
          </div>
          <div className="col-12 d-flex grey ">
            <MdEmail />
            <a href="mailto:info@careerpathfinder.lk" className="a">
              <p className="footerText ms-3">info@careerpathfinder.lk</p>
            </a>
          </div>
          <div className="col-12 d-flex grey ">
            <IoCall />
            <a href="tel:+94704540454" className="a">
              <p className="footerText ms-3">071 234 5678</p>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-sm-12 p-3 ps-lg-5 fblock  ">
          <h6>Valuable Links</h6>
          <Link to={"./"} className="links">
            <li>Home</li>
          </Link>
          <Link to={"./passionId"} className="links">
            <li>Passion Identification</li>
          </Link>
          <Link to={"./careers"} className="links">
            <li>Discover Job Market</li>
          </Link>
          <Link to={"./education"} className="links">
            <li>Education Networking</li>
          </Link>
          <Link to={"./skill"} className="links">
            <li>Soft Skill Development</li>
          </Link>
        </div>

        <div className="col-lg-3 col-sm-12 p-3 f-block">
          <div className="row">
            <h6>Follow us on Social Media</h6>
            <div className="d-flex">
              <a href="" className="links">
                <FaFacebook size={20} />
              </a>
              <a href="" className="links">
                <FaInstagram size={20} className="ms-3" />
              </a>
              <a href="" className="links">
                <FaYoutube size={20} className="ms-3" />
              </a>
              <a href="" className="links">
                <FaLinkedin size={20} className="ms-3" />
              </a>
            </div>
            
          </div>
        </div>
        
      </div>
      <div className="d-flex align-items-center justify-content-center ml-3 mr-3 col-12 bg-transparent text-secondary ">
        <div
          style={{ height: "10vh" }}
          className="d-flex align-items-center justify-content-center ml-3 mr-3 col-10 border-top border-2 pt-3"
        >
          <p>
            &copy; {new Date().getFullYear()} Career Pathfinder | All right reserved{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
