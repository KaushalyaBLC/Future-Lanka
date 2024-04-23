import React from 'react'

const TextAreaInput = ({ question, name, value, onChange }) => {
    return (
      <>
        <label htmlFor={name}>{question}</label>
        <br />
        <textarea
          className="col-12"
          rows={2}
          cols={20}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </>
    );
  };
  

export default TextAreaInput