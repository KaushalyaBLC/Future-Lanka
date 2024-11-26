import React from "react";
import "./Cluster.css";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import { CareerSearch } from "../../Components/DiscoverJobmarket/CareerSearch";
import Loading from "../Loading";

const Cluster = () => {
  const { industry, cluster } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:9000/careers/${industry}/${cluster}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [cluster]);

  if (loading) return <Loading/>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data available</div>;

  return (
    <>
      <Navigation />
      <div className="container mt-4">
        <h1>{data.name}</h1>
        <p>{data.introduction}</p>

        <section className="p-3 bg-success text-light rounded-3 px-4 mt-4">
          <h4 className="">{`Key Sectors in ${data.name}`}</h4>
          <ul className="">
            {data.keySectors.map((sector, index) => (
              <strong>
                <li key={index}>{sector}</li>
              </strong>
            ))}
          </ul>
        </section>

        <section className="p-3 mt-4">
          <h4 className="">{`Essential Skills for ${data.name}`} </h4>
          <ul className="">
            {data.skills.map((skill, index) => (
              <div key={index} className="p-3">
                <h6>{skill.name} </h6>{" "}
                <p className="text-secondary">{skill.description}</p>
              </div>
            ))}
          </ul>
        </section>

        <section className="p-3 bg-success text-light rounded-3 px-4 mt-4">
          <h4>Education Pathways</h4>
          <ul>
            {data.education.map((edu, index) => (
              <div key={index} className="pt-2">
                <h6>{edu.name}</h6> 
                <p className="">{edu.description}</p>
              </div>
            ))}
          </ul>
        </section>

        <section className="p-3 mt-4">
          <h4>{`Popular Careers in ${data.name}`}</h4>
          <ul className="pt-3">
            {data.careers.map((career, index) => (
              <Link to={`/career/search/${career.name}`} className="popular-career text-dark">
              <div key={index} className="px-2 p-1 my-2  rounded career">
                <h6>{career.name} </h6>{" "}
                <p className="text-secondary">{career.description}</p>
              </div>
              </Link>
            ))}
          </ul>
        </section>
        <CareerSearch/>
      </div>
      <Footer />
    </>
  );
};

export default Cluster;
