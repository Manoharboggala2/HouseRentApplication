import React from 'react'
import { useState } from 'react'

function App() 
{
  const[register,setRegister]=useState({
    username:"",
    password:"",
    date:"",
    category:""
  })
  const [errors,setErrors]=useState({});

  const handleClick=(e)=>{
    e.preventDefault();
    const{name,value}=e.target;
    setRegister({...register,[name]:value});
    setErrors({...errors,[name]:""})

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const formErrors=validation();
    if(Object.keys(formErrors).length>0){
      setErrors(formErrors);
      return;
    }
    setRegister({username:"",password:"",date:"",category:""});
    setErrors({});

  }
  const validation=()=>{
    const formErrors={};
    const usernameRegrex= /^[A-Za-z]{3,}$/;
    const passwordRegrex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{5,}$/;
    if (!register.username) {
    formErrors.username = "Username is mandatory";
  } else if (!usernameRegrex.test(register.username)) {
    formErrors.username =
      "Username must contain only letters and be at least 3 chars";
  }
    if(!register.password){
      formErrors.password="password is mandatory";
    }
    else if(!passwordRegrex.test(register.password)){
      formErrors.password="only letters allowed"
    }
    if(!register.date){
      formErrors.date="date is mandatory";
    }
    if(!register.category){
      formErrors.category="category is Mandatoty"
    }
    return formErrors;

  }


  return (
    <>
    <div className='card mt-3 mx-auto  p-3 bg-warning w-25' > 
      <h4 className='text-center ' >User Details</h4>
      <form onSubmit={handleSubmit}>

        <label className='my-3'>UserName</label>
        <br/>
        <input type="text" name="username" id="username" className='form-control'
        value={register.username}
            onChange={handleClick}/>
            {errors.username && <small className="text-danger">{errors.username}</small>}
            <br/>

        <label className='my-3'>Password</label>
        <input type="Password" name="password" id="password" className='form-control'
        value={register.password}
            onChange={handleClick}/>
            {errors.password && <small className="text-danger">{errors.password}</small>}
            <br/>

        <label className='my-3'>Date</label>
        <input type="date" name="date" id="date" className='form-control'
        value={register.date}
            onChange={handleClick}/>
            {errors.date && <small className="text-danger">{errors.date}</small>}
            <br/>

        <label className="my-3">Category:</label>
            <select name="category" id="category" className="form-select"
            value={register.category}
            onChange={handleClick}>
                <option value="">none</option>
                <option value="entertainment">Entertainment</option>
                <option value="action"> Action </option>
                <option value="drama"> Drama </option>
            </select>
            {errors.category && <small className="text-danger">{errors.category}</small>}
            <br/>

        <button className='btn btn-info my-3 w-100'>Submit</button>

      </form>


    </div>
      
    </>
  )
}


export default App
