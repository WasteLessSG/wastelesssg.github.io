import React from 'react';
import Footer from './components/footer.js';
import './App.css';
import NavigationBar from "./components/navbar";
import aboutUs from "./components/aboutUs.js";
import contactUs from "./components/contactUs.js";
import ourSolution from "./components/ourSolution.js";
import Home from "./components/home.js";
import ourTeam from './components/ourTeam.js';
import contactUsSuccess from './components/contactUsSuccess';
import {HashRouter as Router, Route} from 'react-router-dom';
import {SocialIcon} from "react-social-icons";
import logo from "./assets/logo.png";


 function App() {
   return (
       <Router>
           <div className="App ">
                  <NavigationBar className = 'navigationBar'/>
                  <Route path="/" exact component={Home} />
                  <Route path="/aboutus" component={aboutUs}/>
                  <Route path="/team" component={ourTeam} />
                  <Route path="/solution" component={ourSolution} />
                  <Route path="/contact" component={contactUs} />
                  <Route path="/contactSuccess" component={contactUsSuccess} />
                  <Footer/>
           </div>
       </Router>
   );
}

export default App;
