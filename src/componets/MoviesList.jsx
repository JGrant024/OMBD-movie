import { useState, useEffect } from "react";
import LookupForm from "./LookupForm";

function MoviesList() {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const apiKey = "d193b176";
    const url = "https://www.omdbapi.com/?i=tt3896198&apikey=d193b176";

    const apiData = await fetch(url).then((response) => response.json());
    console.log(apiData);
    setData(apiData);

    const handleChange = (e) => {
      apiData((currentState) => ({
        ...currentState,
        [e.target.name]: e.target.value,
      }));
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // call the function that was passed down
    //   // this will send the data back up tp the parent app.jsx
    //   action(myInput);
    // };
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Movie Search Results</h1>
      <div>{data.title}</div>
    </>
  );
}

export default MoviesList;
