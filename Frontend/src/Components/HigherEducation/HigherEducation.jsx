import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Search from "./Search";
import "./HigherEducation.css";
import EducationTitle from "./TitleCard";

const HigherEducation = () => {
  return (
    <>
      <Navigation />
      <h1 className=" col-12 pt-3 pb-3 ps-3 mt-3 text-light bg-warning">Education Networking</h1>
      <div className="educationBody col-12 ">

        <div className="pt-3">
          <div className="d-flex justify-content-center pt-3">
            <EducationTitle
              title="State University Degree Programs"
              description="State universities in Sri Lanka offer diverse degree programs across various fields, emphasizing academic excellence and industry collaboration to prepare future professionals."
            />
            <EducationTitle
              title="Non-State University Degree Programs"
              description="Non-state universities in Sri Lanka provide a range of degree programs across diverse fields, often with a focus on specialized areas of study and practical industry-oriented learning."
            />
            <EducationTitle
              title="Diploma Programs"
              description="Diploma programs, providing specialized training and education in various fields, catering to both academic and vocational interests with a focus on practical skills and industry relevance."
            />
          </div>

          <div className="d-flex justify-content-center pt-2 pb-3">
            <EducationTitle
              title="Vocational Training Programs"
              description="Vocational training programs, providing specialized skills and education tailored to specific industries or professions, offering hands-on experience and practical training to prepare individuals for the workforce."
            />
            <EducationTitle
              title="Certificate Courses"
              description="Certificate courses, offering short-term, focused training programs in specific areas of study or skill development, catering to the needs of individuals seeking to enhance their expertise or enter new fields quickly."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HigherEducation;
