import { useState, useEffect } from "react";

function MoviesList({ title }) {
  const [data, setData] = useState("");

  const apiKey = "d193b176";

  const fetchData = async () => {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
    const apiData = await fetch(url).then((response) => response.json());

    setData(apiData);
    console.log("api data:", apiData);
  };

  useEffect(() => {
    fetchData();
    console.log("Use effect process:", title);
  }, [title]);

  return (
    <>
      {/* <p>{data.title}</p> */}
      {/* {data && data.ratings?.length &&} ( */}
      <>
        <h1>{data.title}</h1>
        <div>{data.Year}</div>
        <div>
          <img src={data.Poster} alt={data.title} />
        </div>
        <p>{data.Plot}</p>
        <p>Ratings:</p>
        {data.Ratings ? (
          <ul>
            {data.Ratings.map((item, index) => (
              <li key={index}>
                {item.Source}:{item.Value}
              </li>
            ))}
          </ul>
        ) : (
          <p>no ratings</p>
        )}
      </>
    </>
  );
  // const handleChange = (e) => {
  //   apiData((currentState) => ({
  //     ...currentState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // call the function that was passed down
  //   // this will send the data back up tp the parent app.jsx
  //   action(myInput);
  // };
}
export default MoviesList;
