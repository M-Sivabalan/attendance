import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import Signin from './Signin.jsx'
import Homepage from './Homepage.jsx';
import Letter from './Letter.jsx';
import About from './About.jsx';
import Contact from'./Contact';
import Stafflogin from "./Stafflogin.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <div>login </div>

      <Routes>
        <Route path="/Body" element={<Body />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>        
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Letter" element={<Letter/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Stafflogin" element={<Stafflogin/>}></Route>
        

      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
