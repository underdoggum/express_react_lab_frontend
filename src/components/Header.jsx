import { Link } from "react-router-dom";


const Header = props => {

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    padding: "0.75em",
    width: "95%",
    margin: "auto",
    fontSize: "1.25em",
  };

  const memeURL = "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-41-300x294.png";

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">
          <div className="title is-4">HOME</div>
        </Link>
        <Link to="/about">
          <div className="title is-4">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="title is-4">PROJECTS</div>
        </Link>
        <Link to="/meme">
          <img src={memeURL} alt="programmer meme pointing at semi-colon" width={100} />
        </Link>
      </nav>
    </header>
  )
}


export default Header;
