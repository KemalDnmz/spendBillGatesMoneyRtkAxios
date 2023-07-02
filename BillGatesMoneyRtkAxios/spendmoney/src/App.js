import "./App.css";
import CardList from "./components/CardList";
import HeaderA from "./components/HeaderA";
import HeaderB from "./components/HeaderB";
import Receipt from "./components/Receipt";

function App() {

  return (
    <div className="App">
      <div className="container">
        <HeaderA />
        <HeaderB />
        <CardList/>
        <Receipt/>
      </div>
    </div>
  );
}

export default App;
