import './Home.css';
import {
    Link
  } from "react-router-dom";

function Home(){
    return(
        <>
        <h1>Login and Registration</h1>
        <div className='container'>
        <Link to="/signin"><button>SIGN IN</button></Link>
        <Link to="signup"><button>SIGN UP</button></Link>
        </div>
        </>
    )
}

export default Home