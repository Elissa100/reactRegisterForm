import React, { useState } from 'react';
import './styleForm.css';

const Form = (props) => {

  const {label,error,onChange,id,...all} = props;
  const [focused,setfocused] = useState(false);

  function handleFocus(e){
    setfocused(true);
  }

  return (
    <div className='component1'>
      <label>{label}</label>
      <input {...all} onChange={onChange} onBlur={handleFocus} fucused={focused.toString()}
      onFocus={()=>all.name="confirmPassword" &&setfocused(true)}
      />
      <span>{error}</span>
    </div>
  );
};

export default Form;
