import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

function App({ name = "Test" }) {
  const [zahl, setZahl] = useState(1);
  const [card, setCard] = useState(false);

  return (
    <div className="center container paper">
      <Header name={name} />
      <div className="row">
        <button
          onClick={() => setZahl(zahl + 1)}
          className="btn-success-outline"
        >
          +1
        </button>
        <button onClick={() => setCard(!card)} className="btn-danger-outline">
          Card
        </button>
      </div>

      <Main number={zahl} content="Guybrush" card={card} />
      <Main number="2" content="LeChuck" card={card} />
      <Main />
    </div>
  );
}

export default App;
