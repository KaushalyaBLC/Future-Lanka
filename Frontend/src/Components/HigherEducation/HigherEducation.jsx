import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./HigherEducation.css";

const HigherEducation = () => {
  return (
    <>
      <Navigation />
      <section className="education-body container d-flex justify-content-center align-items-center">
        <div>
          <div className="d-lg-flex justify-content-between p-3">
            <div className="col-lg-4 p-2">
              <a href="https://www.mohe.gov.lk/index.php?option=com_courses&view=course_details&Itemid=225&lang=en" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">
                <div className="text-center border rounded-3 bg-warning">
                  <h3 className="py-5">State University Degree Programs</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-4 p-2">
              <a href="https://www.coursenet.lk/courses/?levels=1,2" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">
                <div className="text-center border rounded-3 bg-primary">
                  <h3 className="py-5">Non State University Degree Programs</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-4 p-2">
              <a href="https://www.coursenet.lk/courses/?levels=4,5,6" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">
                <div className="text-center border rounded-3 bg-success">
                  <h3 className="py-5">Diploma and Higher Diploma Programs</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="d-lg-flex px-3">
            <div className="col-lg-6 p-2">
              <a href="https://course.vta.lk/program/desc/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">
                <div className="text-center border rounded-3 bg-danger">
                  <h3 className="py-5">NVQ Courses</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-6 p-2">
              <a href="https://www.coursenet.lk/courses/?levels=7,8" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">
                <div className="text-center border rounded-3 bg-info">
                  <h3 className="py-5">Certificate Courses</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HigherEducation;
