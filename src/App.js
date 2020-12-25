import React from 'react';
import Footer from './components/footer.js';
import './App.css';
import NavigationBar from "./components/navbar";
import Routes from "./components/Routes";
import {HashRouter as Router} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App ">

                  <NavigationBar className = 'navigationBar'/>
                  <Routes className = 'routes'/>
                  <Footer/>

          </div>
      </Router>
  );
}

export default App;
