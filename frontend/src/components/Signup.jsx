
import {useState} from 'react';
import axios from 'axios';
function Signup(){
    const [formdata,setFormdata]=useState({
        username:"",
        password:"",
        confirmPassword:""
    });

    const handleChange=(e)=>{
        setFormdata({
            ...formdata,[e.target.name]:e.target.value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(formdata.password!==formdata.confirmPassword){
            console.log("passwords don't match! ");
        }
        else{
            const response=await axios.post("http://localhost:3000/signup",formdata);
            console.log(response.data);
        }
    }
    return(
        <>
        <div className="form-container">
            <h1>Sign Up</h1>
        <form>
            <label>Username: </label>
            <input type="text" value={formdata.username} name="username" onChange={handleChange}></input>
            <label>Password: </label>
            <input type="password" value={formdata.password} name="password" onChange={handleChange}></input>
            <label>Confirm Password: </label>
            <input type="password" value={formdata.confirmPassword} name="confirmPassword" onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            
        </form>
        </div>
        </>
    )
}

export default Signup