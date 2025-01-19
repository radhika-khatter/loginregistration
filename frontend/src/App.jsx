import './App.css'
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
     <Router>
      <div>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
