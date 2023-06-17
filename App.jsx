import React, { useState } from 'react';
import './App.css';
import Form from './components/form';


function App() {
 

  const handleSubmit = (e)=>{
    e.preventDefault();
   const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()))
  };
  const [values,setValues] = useState({
    username: "",
    email:"",
    age:"",
    password:"",
    birthDate:"",
    error:"",
    confirmPassword: "",
    required: true
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      error:"Username should be atleast 3 characters and atmost 15 characters long",
      label: "Username: ",
      pattern: "^[A-Za-z0-9]{3,15}$",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      error:"Email should be Valid",
      label:"Email",
      required:true
    },
    {
      id:3,
      name:"age",
      type:"number",
      placeholder:"Age",
      label:"Age: ",

    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      error:"password should contain atleast 8 characters and atlest 1 special character and 1 number",
      label:"Password: ",
      pattern: "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d!@#$%^&*()_+]{8,20}",
      required:true
    },
    {
   id:7,
   name:"bd",
   type:"date",
   placeholder:"what is your birthday",
   label:"Date of Birth"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Repeat Your Password",
      error:"Passwords must match",
      label:"Confirm Password: ",
      pattern: values.password,
      required:true
    }
  ]

  const onchange = (e)=>{
 setValues({...values, [e.target.name]: e.target.value});
  }
  
  console.log(values)

  return (
    
    <div className="App">
      <h1 id='heading1'>Register &nbsp; &nbsp; &nbsp;</h1>
      <form className='form-group' onSubmit={handleSubmit}>

        <div className='styles'>
    <h1 id='heading1'>Signup Here </h1>
      {inputs.map((input)=>(
        <Form key={input.id}
        {...input} 
        value={values[input.name]} 
        onChange={onchange} />
      ))}
    <button>Signup</button>
      </div>
      </form>
    
    </div>
  );
}

export default App;
