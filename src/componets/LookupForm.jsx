import { useState } from "react";

const LookupForm = ({ action }) => {
  const [movieTitles, setMovieTitles] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submit value:', movieTitles)
    action(movieTitles);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setMovieTitles(value);
  };

  return (
    <>
      <h1>OMBD MOVIES</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title Lookup
          <input
            type="text"
            name="movieTitles"
            value={movieTitles}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Find Movie</button>
      </form>
    </>
  );
};

export default LookupForm;
