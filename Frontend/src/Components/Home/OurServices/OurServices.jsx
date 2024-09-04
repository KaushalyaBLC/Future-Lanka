import React from "react";
import { Container } from "react-bootstrap";
import "./OurServices.css";
import ServiceCard from "./ServiceCard";
import Passion from "./Logos/passion.png";
import Explore from "./Logos/careerexplore.png";
import Education from "./Logos/education.png";
import Skill from "./Logos/skill.png";

const services = [
  {
    Title: "Skill & Passion Identification",
    Description:
      "Uncover your true calling with our expert guidance. We help you identify your skills and passions, aligning them with potential career paths for a fulfilling professional journey.",
    Imgsrc: "{Passion}",
  },
  {
    Title: "Career Exploration",
    Description:
      "Delve into Future Lanka's expansive career database a treasure trove of insights covering nearly every imaginable profession. Uncover intricate details, align your passions, and chart your course to success.",
    Imgsrc: "{Explore}",
  },
  {
    Title: "Higher Education Networking",
    Description:
      "Navigate the vast landscape of higher education with confidence. Explore the most suitable programs offered by government, semi-government, private universities, and vocational education institutions across Sri Lanka.",
    Imgsrc: "{Explore}",
  },
  {
    Title: "Soft-Skill Development & Employment Support",
    Description:
      "Elevate your career prospects by honing essential soft skills. Our tailored programs equip you with the communication, teamwork, and leadership skills vital for success in any field.",
    Imgsrc: "{Skill}",
  },
];

const OurServices = () => {
  return (
    <>
      <section className="ourServices ">
        <div className="container pt-5 pb-5">
          <div className="d-flex align-items-center  flex-column flex-lg-row  ">
            <div className="col-lg-12 col-sm-12 ">
              <h1 className="pb-2 ">
                Our <span className="text-success">Services</span>
              </h1>
              <p className="servicesParagraph">
                At Career Pathfinder, we leverage advanced AI technology to
                offer personalized career guidance that is both insightful and
                tailored to your unique needs. Our services include
              </p>

              <div className="col-lg-12 col-sm-12  ">
                <div className="row col-12 d-flex  ">
                  <div className="col-lg-6 col-sm-12">
                    <ServiceCard
                      Title={services[0].Title}
                      Description={services[0].Description}
                      Imgsrc={Passion}
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ServiceCard
                      Title={services[1].Title}
                      Description={services[1].Description}
                      Imgsrc={Explore}
                    />
                  </div>
                </div>
                <div className="row col-12 d-flex">
                  <div className="col-lg-6 col-sm-12">
                    <ServiceCard
                      Title={services[2].Title}
                      Description={services[2].Description}
                      Imgsrc={Education}
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ServiceCard
                      Title={services[3].Title}
                      Description={services[3].Description}
                      Imgsrc={Skill}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
