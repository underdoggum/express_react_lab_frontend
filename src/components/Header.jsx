import { Link } from "react-router-dom";


const Header = props => {

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "black",
    padding: "0.75em",
    width: "95%",
    margin: "auto",
    fontSize: "1.25em",
    color: "lightblue"
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  )
}


export default Header;
