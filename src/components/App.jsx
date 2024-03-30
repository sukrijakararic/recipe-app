import "../styles/App.css";
import { Header } from "./Header";
import { GetRandomRecipe } from "./GetRandomRecipe";
import { Welcome } from "./welcome/Welcome";
import { useEffect, useState } from "react";


function App() {

  const [welcome, setWelcome] = useState(true)
    useEffect(() => {
        setTimeout(() => setWelcome(false), 3300)
    }, [])
    if (welcome) {
        return <Welcome />
    }

  return (
    <div className="App">
      <Header />
      <GetRandomRecipe />
    </div>
  );
}

export default App;
