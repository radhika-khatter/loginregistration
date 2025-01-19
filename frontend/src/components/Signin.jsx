import './Signin.css';
import axios from 'axios';
import {useState} from 'react';
import {
    Link
  } from "react-router-dom";

function Signin(){
    const [formdata,setFormdata]=useState({
        username:"",
        password:"",
    });

    const handleChange=(e)=>{
        setFormdata({
            ...formdata,[e.target.name]:e.target.value
        })
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();

        try{
            const response=await axios.post('http://localhost:3000/signin',formdata);
            console.log(response.data);
        }catch(error){
            console.log("error occurred");
        }
    }
    return(
        <>
        <div className="form-container">
            <h1>Sign In</h1>
        <form>
            <label>Username: </label>
            <input type="text" value={formdata.username} name="username" onChange={handleChange}></input>
            <label>Password: </label>
            <input type="password" value={formdata.password} name="password" onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <p>Not registered yet?<Link to="/signup">SIGN UP </Link></p>
        </form>
        </div>
        </>
    )
}

export default Signin