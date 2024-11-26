import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import AI from './aibot.gif';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import Loading from '../Loading';

const CareerSearchResults = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const textareaRef = useRef(null);

  const { career } = useParams();

  useEffect(() => {
    console.log(career);
    fetch(`http://127.0.0.1:9000/careers/search/data/${career}`)
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
  }, [career]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on content
    }
  }, [data]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navigation />
      <section className="vh-75">
        <div className="d-lg-flex container py-5">
          <div className="col-lg-4 p-5 d-flex">
            <div className="text-center py-3">
              <h2>
                Insights about <span className='text-success'>{career}</span>
              </h2>
              <p className="text-center">Personalized insights just for you!</p>
              <div className="d-flex justify-content-center">
                <img
                  src={AI}
                  alt="AI Illustration"
                  className="img-fluid"
                  width={300}
                />
              </div>
              <p className="text-center text-secondary">
                You know yourself best. Use these suggestions to start your
                journey. Research well and choose what fits your goals and
                circumstances.
              </p>
              <h6>Good Luck for your career journey!</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <textarea
              className="col-12 border-0 bg-success text-light p-5 rounded-3 text-justify"
              rows={1} // Start with 1 row
              id="result"
              name="result"
              value={data.message}
              readOnly
              ref={textareaRef}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareerSearchResults;
