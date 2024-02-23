import { useState } from "react";
import LookupForm from "./componets/LookupForm";
import "./App.css";
import MoviesList from "./componets/MoviesList";

function App() {
  const [movieInfo, setMovieInfo] = useState([]);
  // const [movieList, setMovieList] = useState([]);
  const getMovieData = (title) => {
    const newMovieList = [title, ...movieInfo];
    setMovieInfo(newMovieList);
    console.log("app handle new input:", newMovieList);
  };
  // `${movie}-${index}`

  return (
    <>
      <LookupForm action={getMovieData} />
      <div>
        {!!movieInfo.length &&
          movieInfo.map((newMovie, index) => (
            <MoviesList key={index} title={newMovie} />
          ))}
      </div>
    </>
  );
}

export default App;
