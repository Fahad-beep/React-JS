import React from "react";
import { useState } from "react";
const UseStatePractice = () => {
  const [friends, setFriends] = useState(["Alex", "John"]);
  const [movie, setMovie] = useState({
    title: "Channai Express",
    rating: 7,
  });
  const [movies, setMovies] = useState([
    { id: 1, title: "Channai Express", rating: 7 },

    { id: 2, title: "Spider-Man", rating: 10 },
  ]);
  const updateMovies = () =>
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...m, title: "john wick 5" } : m))
    );
  const addFriend = () => setFriends([...friends, "Habibi"]);
  const updateFriend = () =>
    setFriends(friends.map((f) => (f === "Alex" ? "Alex Bhatti" : f)));
  const updateRating = () => setMovie({ ...movie, rating: 5 });
  const removeFriend = () =>
    setFriends(friends.filter((f) => f !== "John" && f !== "Habibi")); //it will return all values which are not = to John
  // if its = to john then filter function will skip those values, every value returned will be saved in friends by setFriends
  //setter in this context sets value as it was never initialized
  return (
    <div>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateFriend}>update Friend</button>
      <h1>Title: {movie.title}</h1>
      <h2>Rating: {movie.rating}</h2>
      <button onClick={updateRating}>Change Rating</button>
      {movies.map((m) => (
        <ul key={Math.random()}>
          <li key={Math.random() * 10}>{m.title}</li>
          <li key={Math.random() / 10}>{m.rating}</li>
        </ul>
      ))}
      <button onClick={updateMovies}>Update Movies</button>
    </div>
  );
};

export default UseStatePractice;
