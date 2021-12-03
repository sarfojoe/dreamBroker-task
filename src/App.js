import React from "react";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="f-heading">
        <h1>Features</h1>
        <p>Here are some features of Nion</p>
      </div>
      <Features />
      <Services />
    </div>
  );
}

export default App;
