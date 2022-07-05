import "./App.css";
import data from "./data.json";

// components
import Card from "./components/Card.js";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default App;
