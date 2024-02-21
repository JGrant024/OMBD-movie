import { useState } from "react";
import MoviesList from "./MoviesList";

const LookupForm = ({ action }) => {
//   const [moviePoster, setMoviePoster] = useState("");
//   const [movieTitle, setMovieTitle] = useState(" ");
//   const [releaseYear, setReleaseYear] = useState("");
//   const [plotDescripton, setPlotDescription] = useState(" ");
//   const [ratings, setRatings] = useState("");

  const handleChange = (e) => {
    ((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1>OMBD MOVIES</h1>
      <form>
        <label>
          Movie Title Lookup
          <input type="text" name="" value={""} />
        </label>
        <button type="submit">Find Movie</button>
      </form>
    </>
  );
};

export default LookupForm;
