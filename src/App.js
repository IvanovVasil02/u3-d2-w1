import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import SearchBook from "./components/SearchBook";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App ">
      <MyNav />
      <Welcome />
      <SearchBook books={fantasy} />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
