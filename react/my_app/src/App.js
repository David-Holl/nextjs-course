import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App({ name = "Test" }) {
  return (
    <div>
      <Header name={name} />
      <Main number="1" content="Guybrush" />
      <Main number="2" content="LeChuck" />
      <Main />
    </div>
  );
}

export default App;
