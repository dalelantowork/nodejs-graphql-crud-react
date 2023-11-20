import React, { useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      nationality
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

function DisplayData() {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
  const [movieSearched, setMovieSearched] = useState("");
  const [
    fetchMovie,
    { data: movieSearchedData, error: movieError },
  ] = useLazyQuery(GET_MOVIE_BY_NAME);

  if (loading) {
    return <h1>Data is Loading...</h1>;
  }
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  if (movieError) {
    console.log(movieError);
  }
  return (
    <div>
      <div>
        <h1>List of Users</h1>
        {data &&
          data.users.map((user) => {
            return (
              <div>
                <p>
                  <h2>Name: {user.name}</h2>
                  Username: {user.username} <br />
                  Age: {user.age} <br />
                  nationality: {user.nationality} <br />
                </p>
              </div>
            );
          })}
      </div>
      <div>
        <h1>List of Movies</h1>
        {movieData &&
          movieData.movies.map((movie) => {
            return (
              <div>
                <p>
                  <h2>Name: {movie.name}</h2>
                </p>
              </div>
            );
          })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Movie name here..."
          onChange={(event) => {
            setMovieSearched(event.target.value);
          }}
        />
        <button
          onClick={() =>
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            })
          }
        >
          {" "}
          Fetch Data
        </button>
        <div>
          {movieSearchedData && (
            <div>
              <p>
                <h2>Movie Name : {movieSearchedData.movie.name}</h2>
                Publication: {movieSearchedData.movie.yearOfPublication}
              </p>
            </div>
          )}
          {movieError && <h1> There was an error fetching the data</h1>}
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
