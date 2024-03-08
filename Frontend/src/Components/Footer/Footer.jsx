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
      <div className="flfooter d-flex text-light   flex-column flex-lg-row p-4">
        <div className="col-lg-5 col-sm-12 p-3">
          <h6>Future Lanka Research and Development Foundation</h6>
          <p className="footerText">
            Future Lanka Foundation empowers students with a unique approach to
            find fulfilling careers. We combine passion, skills, and informed
            decision-making to guide them towards success. Explore
            transformative experiences and unparalleled exposure. Let's craft
            your future, together.
          </p>
          <div className="col-12 d-flex grey ">
            <IoLocation />
            <address className="footerText ms-3">
              No. 13, Adams Avenue, Colombo-04, Sri Lanka
            </address>
          </div>
          <div className="col-12 d-flex grey ">
            <MdEmail />
            <a href="mailto:info@futurelanka.lk" className="a">
              <p className="footerText ms-3">info@futurelanka.lk</p>
            </a>
          </div>
          <div className="col-12 d-flex grey ">
            <IoCall />
            <a href="tel:+94704540454" className="a">
              <p className="footerText ms-3">070 454 0454</p>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12 p-3 ps-5  ">
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
        <div className="col-lg-3 col-sm-12 p-3">
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
            <div className="row mt-3">
              <h6>National Career Guidance Podcast</h6>
              <a href="" className="links">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-lg-12">
          <img src={Logo} height="200vh" />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center ml-3 mr-3 col-12 bg-transparent text-secondary">
        <div style={{ height: '10vh' }} className="d-flex align-items-center justify-content-center ml-3 mr-3 col-10 border-top border-2">
            <p>&copy; {new Date().getFullYear()} Future Lanka Research & Development Foundation | All right reserved  </p>
        </div>
        </div>
    </section>
  );
};

export default Footer;
