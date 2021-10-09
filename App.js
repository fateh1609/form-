import * as React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <br/>
      <label>age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <br />
         <label>father's name:
      <input 
        type="text" 
        name="father" 
        value={inputs.father || ""} 
        onChange={handleChange}
      />
      </label>
      <br />
       <label>email:
      <input 
        type="email" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      <br />
      </label>
        <input type="submit" />
    </form>
  )
}

ReactDOM.render(<MyForm />,document.getElementById('root'));
