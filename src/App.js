import './App.css';
import "bulma/css/bulma.min.css";
import { Route, Routes } from "react-router-dom";
// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

// https://git.generalassemb.ly/SEIR-927/Unit_3_React_Express/blob/main/Day_06/lab.md

function App() {

  const URL = "https://nn-express-react-lab.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects URL={URL} />} />
        <Route exact path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
