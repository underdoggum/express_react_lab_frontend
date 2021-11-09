const Meme = props => {
  return (
    <div className="Meme">
      <img src={props.memeURL} alt="meme" width={500} />
    </div>
  )
}


export default Meme;
