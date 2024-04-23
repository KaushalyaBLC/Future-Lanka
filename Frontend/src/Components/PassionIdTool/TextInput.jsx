import React from 'react'

const TextInput = ({ question, name, value, onChange, required }) => {
  return (
    <>
        <label htmlFor={name}>{question}</label>
              <br />
              <input
                className="col-12"
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                {...required==true&&(required)}
              />
    </>
  )
}

export default TextInput