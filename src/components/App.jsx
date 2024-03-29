import "../styles/App.css";
import { Header } from "./Header";
import { GetRandomRecipe } from "./GetRandomRecipe";
import { Welcome } from "./welcome/Welcome";


function App() {

  return (
    <div className="App">
      <Welcome />
      <Header />
      <GetRandomRecipe />
    </div>
  );
}

export default App;
