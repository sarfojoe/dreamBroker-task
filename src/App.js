import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <Header />

      <About />
      <Services />
      <Project />
    </div>
  );
}

export default App;
