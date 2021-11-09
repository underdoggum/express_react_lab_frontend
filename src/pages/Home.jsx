const Home = props => {

  const homeStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
  const thingsStyle = {
    display: "flex",
    justifyContent: "center",

  }


  return (
    <div style={homeStyle}>
      <h1 className="title is-1 mb-1">Making things that make a difference</h1>
      <h1 className="title is-6 mb-6">(and messing around with mixed ways to style React)</h1>
      <div className="things" style={thingsStyle}>
        <div className="thing" style={{minWidth: "180px", width: "30%", padding: "1em", margin: "auto", border: "2px solid black"}}>
          Thing 1 - One difference, today!
        </div>
        <div className="thing" style={{minWidth: "180px", width: "30%", marginLeft: "2em", padding: "1em", margin: "auto", border: "2px solid black"}}>
          Thing 2 - A better, more improved Thing 1
        </div>
      </div>
    </div>
  )
}


export default Home;
