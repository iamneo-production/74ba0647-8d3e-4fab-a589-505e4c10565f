import axios from "axios";
import { useState } from "react";
import {Link} from 'react-router-dom';
import "../components/registation.css";
 
function Register()
{
   const [id, setId] = useState("");
   const [firstname, setFname] = useState("");
   const [lastname, setLname] = useState("");
   const [city, setCity] = useState("");
   const [phone, setPhone] = useState("");
   const [salary, setSalary] = useState("");
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8013/save",
        {
        id: id,
        fname: firstname,
        lname : lastname,
        city : city,
        phone : phone,
        salary :salary
        });
          alert("User Registation Successfully");
          setId("");
          setFname("");
          setLname("");
          setCity("");
          setPhone("");
          setSalary("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
            <p>Fill in the Information Below</p>
 
            <input type="text"
             name="role"
             placeholder="Role"
                    
             onChange={(event) =>
              {
                  setId(event.target.value);      
              }}
            />
 
            <input type="text"
            name="email"
            placeholder="Email Address"
            onChange={(event) =>
                {
                    setFname(event.target.value);      
                }}
            />
 
            <input type="text"
            name="username"
            placeholder="Username"
            onChange={(event) =>
                {
                    setLname(event.target.value);      
                }}          
            />
 
            
            <input type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={(event) =>
                {
                    setCity(event.target.value);      
                }}          
            />
        <input type="text"
            name="pass"
            placeholder="Password"
            onChange={(event) =>
                {
                    setPhone(event.target.value);      
                }}          
            />
 
    <input type="text"
            name="cnfrmpass"
            placeholder="Conform Password"
            onChange={(event) =>
                {
                    setSalary(event.target.value);      
                }}          
            />
            <button type="submit">Register</button>
            <p className="forgot-password text-right mt-2">
            Already a user?  <a href="/">Login</a>
        </p>
            </form>
        </div>
        
            
    )
}
 
export default Register;