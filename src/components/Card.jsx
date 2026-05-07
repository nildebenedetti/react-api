{/** 
    {id},
    {fullName},
    {birthYear},
    {bio},
    {img},
    {awards}
           */}


function Card({
    img = "link",
    fullName = "Name Surname",
    birthYear = "YYYY",
    bio = "Something about her life that made her the Woman she is.",
    awards = "# Oscars, # Academy Awards",
    moviesStarred = "'TFinding Nemo', 'Kung Fu Panda', 'Lion King'"
}
) {

    return <div className="card m-3 col">
  <img src={img} className="card-img-top" alt={fullName}></img>
  <div className="card-body">
    <h5 className="card-title">{fullName}</h5>
    <p className="card-text">{`Born in ${birthYear}.`}</p>
    <p className="card-text">{`Awards won: ${awards}.`}</p>
    <p className="card-text">{`You might have seen their face in ${moviesStarred }`}</p>
    <p className="card-text">{bio}</p>
  </div>
</div>
}
export default Card;