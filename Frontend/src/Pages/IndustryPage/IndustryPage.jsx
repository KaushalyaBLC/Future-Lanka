import React, { useState, useEffect } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import Manufacturing from "../images/manufacturing.jpg";
import HeakthCare from "../images/healthcare.jpg";
import Agriculture from "../images/agriculture.jpg";
import Construction from "../images/construction.jpg";
import IT from "../images/it.jpg";
import AutoMobile from "../images/automobile.jpg";
import SkillImg from "./skill.gif";
import "./IndustryPage.css";
import { Link } from "react-router-dom";
import { CareerSearch } from "../../Components/DiscoverJobmarket/CareerSearch";
import Loading from "../Loading";


const IndustryPage = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:9000/careers/${props.industry}` ||
        `http://192.168.43.74:9000/careers/${props.industry}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })

      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [props.industry]);

  useEffect(() => {
    switch (props.industry) {
      case "manufacturing":
        setImg(Manufacturing);
        break;
      case "automobile":
        setImg(AutoMobile);
        break;
      case "construction":
        setImg(Construction);
        break;
      case "healthcare":
        setImg(HeakthCare);
        break;
      case "agriculture":
        setImg(Agriculture);
        break;
      case "it":
        setImg(IT);
        break;

      default:
        setImg(null);
    }
  }, [props.industry]);

  if (loading) return <Loading/>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data available</div>; // Handle the case where data is null

  return (
    <>
      <Navigation />
      <div className="industryBody">
        <div className="container">
          <h1 className="py-3">{`Overview of the ${data.name} Industry`}</h1>
          <div className="row">
            <div className="col-lg-5 d-flex">
              <img src={img} alt="" className="rounded img-fluid" />
            </div>
            <div className="col-lg-7 pt-3">
              <h4>Industry Scope</h4>
              <p>{data.scope}</p>
              <h4 className="pt-2">Key Sectors</h4>
              <ul>
                {data.sectors?.map((sector, index) => (
                  <li key={index}>
                    <strong>{sector.name}:</strong> {sector.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-success text-light rounded-3 mt-4 p-3">
            <h4>Career Opportunities</h4>
            <ul>
              {data.opportunity?.map((opportunity, index) => (
                <li key={index}>
                  <strong>{opportunity.name}:</strong> {opportunity.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="d-lg-flex pt-3">
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <img src={SkillImg} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-8 mt-4 p-3">
              <h4>Skills and Qualifications</h4>
              <ul>
                {data.skills?.map((skill, index) => (
                  <li key={index}>
                    <strong>{skill.name}:</strong> {skill.description}
                  </li>
                ))}
              </ul>
              <h4 className="pt-3">Industry Trends</h4>
              <ul>
                {data.trends?.map((trend, index) => (
                  <li key={index}>
                    <strong>{trend.name}:</strong> {trend.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-success text-light rounded-3 mt-4 p-3 mb-2">
            <h4>Career Pathways</h4>
            <p>{data.careerpathways}</p>
            <h4 className="pt-3">Education and Training</h4>
            <p>{data.education}</p>
          </div>

          <div className="pb-5">
            <h3 className="py-5">{`Career Pathways in the ${data.name} Industry`}</h3>
            {data.careerClusters?.map((careerCluster, index) => (
              <Link
                to={`/careers/${props.industry}/${careerCluster.path}`}
                key={index}
                className="cluster text-dark"
              >
                <div className="cluster-tab p-2 rounded-3 mt-2">
                  <h4>{careerCluster.name}</h4>
                  <p>{careerCluster.description}</p>
                </div>
              </Link>
            ))}
          </div>
     
        </div>
        <CareerSearch/>
      </div>

      <Footer />
    </>
  );
};

export default IndustryPage;
