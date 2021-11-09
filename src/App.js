import './App.css';
import "bulma/css/bulma.min.css";
import { Route, Routes } from "react-router-dom";
// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Meme from "./pages/Meme"

// https://git.generalassemb.ly/SEIR-927/Unit_3_React_Express/blob/main/Day_06/lab.md

function App() {

  const URL = "https://nn-express-react-lab.herokuapp.com/";
  const memeURL = "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-41-300x294.png";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects URL={URL} />} />
        <Route exact path="/about" element={<About URL={URL} />} />
        <Route exact path="/meme" element={<Meme memeURL={memeURL} />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
