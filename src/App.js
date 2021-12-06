import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />

      <About />
      <Services />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
