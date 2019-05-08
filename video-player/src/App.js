import React from "react";
import "./App.css";
import { VideoComponent } from "./Video/VideoComponent";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Simple Video Player</h1>
      <hr />
      <VideoComponent />
    </div>
  );
}

export default App;
