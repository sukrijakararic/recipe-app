import "../styles/App.css";
import { Header } from "./Header";
import { GetRandomRecipe } from "./GetRandomRecipe";


function App() {

  return (
    <div className="App">
      <Header />
      <GetRandomRecipe />
    </div>
  );
}

export default App;
