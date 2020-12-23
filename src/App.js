import logo from './logo.png';
import './components/navbar';
import './App.css';
import NavigationBar from "./components/navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
        <Routes/>
    </div>
  );
}

export default App;
