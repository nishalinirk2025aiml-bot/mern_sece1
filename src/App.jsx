import { useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";
import "./App.css";

const playerData = [
  { id: 100, name: "Kohli", age: 34, country: "India" },
  { id: 101, name: "Dhoni", age: 42, country: "India" },
  { id: 102, name: "Rohit", age: 36, country: "India" },
];

function Player({ obj }) {
  return (
    <section className="player-section">
      <h1>List of Players</h1>
      <div className="players">
        {obj.map((player) => (
          <article className="player-card" key={player.id}>
            <h2 style={{ color: "blue" }}>Id: {player.id}</h2>
            <h2 style={{ color: "green" }}>Name: {player.name}</h2>
            <h2 style={{ color: "orange" }}>Age: {player.age}</h2>
            <h2 style={{ color: "purple" }}>Country: {player.country}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}

function Data({ obj }) {
  return (
    <section className="card">
      <h1>Data Page</h1>
      <h2>Name: {obj.name}</h2>
      <h2>Age: {obj.age}</h2>
    </section>
  );
}

function App() {
  useEffect(() => {
    console.log("App loaded");
    console.log("Players:", playerData);
    console.table(playerData);
  }, []);

  return (
    <main className="app">
      <header className="app-header">
        <h1>Hey there! I'm a React component!</h1>
        <h2>JS File</h2>
      </header>

      <div className="info-row">
        <section className="card">
          <Home />
        </section>
        <section className="card">
          <Contact />
        </section>
        <Data obj={{ name: "Nisha", age: 21 }} />
      </div>

      <Player obj={playerData} />
    </main>
  );
}

export default App;
