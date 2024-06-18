import React from "react";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import "./App.css";
import Card from "./component/Card/Card";
import ConditionalCss from "./component/ConditionalCss/ConditionalCss";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Card />
      <ConditionalCss />
    </div>
  );
}

export default App;
