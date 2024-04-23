import React from 'react'


const NumberInput = ({ question, name, value, onChange}) => {
  return (
    <>
    <label htmlFor={name}>{question}</label>
          <br />
          <input
            className="col-12"
            type="number"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required
          />
</>
  )
}

export default NumberInput