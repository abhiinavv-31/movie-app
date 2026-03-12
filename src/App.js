import React, { useState } from "react";
import "./App.css";

function App() {

const movies = [
{
id:1,
name:"Inception",
year:2010,
genre:"Sci-Fi",
desc:"A thief who steals secrets through dream-sharing technology.",
image:"https://m.media-amazon.com/images/I/51zUbui+gbL.jpg"
},
{
id:2,
name:"Avatar",
year:2009,
genre:"Action",
desc:"A marine explores the alien world of Pandora.",
image:"https://m.media-amazon.com/images/I/41kTVLeW1CL.jpg"
},
{
id:3,
name:"Titanic",
year:1997,
genre:"Romance",
desc:"A love story on the Titanic ship.",
image:"https://m.media-amazon.com/images/I/71yTVs+9pRL._AC_SY679_.jpg"
},
{
id:4,
name:"Avengers",
year:2012,
genre:"Action",
desc:"Superheroes team up to save the Earth.",
image:"https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
},
{
id:5,
name:"Interstellar",
year:2014,
genre:"Sci-Fi",
desc:"Astronauts travel through a wormhole to save humanity.",
image:"https://m.media-amazon.com/images/I/71n58vX4HUL._AC_SY679_.jpg"
}
];

const [selectedMovie, setSelectedMovie] = useState(null);

if(selectedMovie){
return(
<div className="container">
<h1>Movie Details</h1>

<img src={selectedMovie.image} alt={selectedMovie.name} />

<h2>{selectedMovie.name}</h2>
<p><b>Year:</b> {selectedMovie.year}</p>
<p><b>Genre:</b> {selectedMovie.genre}</p>
<p>{selectedMovie.desc}</p>

<button onClick={()=>setSelectedMovie(null)}>Back</button>

</div>
)
}

return(
<div className="container">

<h1>🎬 Movie Listing Application</h1>

<div className="movie-grid">

{movies.map(movie => (

<div className="movie-card" key={movie.id}>

<img src={movie.image} alt={movie.name} />

<h3>{movie.name}</h3>

<button onClick={()=>setSelectedMovie(movie)}>
View Details
</button>

</div>

))}

</div>

</div>
)

}

export default App;