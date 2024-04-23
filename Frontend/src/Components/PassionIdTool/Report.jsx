import React, { useEffect } from 'react';

const Report = ({ name, res }) => {
  useEffect(() => {
    const textarea = document.getElementById('result');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [res.message]);

  return (
    <>
      <div className="col-12  form">
        <div className="registerwrap col-lg-8">
          <h3 className="text-center">
            Identify Your True Potential with Future Lanka Passion Identification Bot
          </h3>
          <div className="mt-4">
            <h5>Hello {name},</h5>
            <textarea
              className="col-12 border-0"
              rows={4} // Set minimum rows
              id="result"
              name="result"
              value={res.message}
              readOnly
            />
            <p>
              You know yourself better than anyone, Use these suggestions as a starting point for self-discovery.
              Research thoroughly and make choices aligned with your unique goals and circumstances.
            </p>
            <h6>Good Luck for your career journey!</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
