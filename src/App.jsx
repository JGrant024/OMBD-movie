import { useState } from "react";
import LookupForm from "./componets/LookupForm";
import "./App.css";

function App() {
  const [movieInfo, setMovieInfo] = useState("");

  const getMovieData = (text) => {
    setMovieInfo(text);
  };


  return (
    <>
      <h1></h1>
      <LookupForm action={getMovieData}></LookupForm>
      <p>{movieInfo}</p>
    </>
  );
}

export default App;
