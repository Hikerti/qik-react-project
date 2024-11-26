import React from "react";
import './styles/App.css';
import List from "./companents/List";

function App() {

  return (   
    <div className="App">
      <List post = {{id: 1, title: 'Javascript', body: 'Содержимое'}} />
    </div>
  );
}

export default App;
