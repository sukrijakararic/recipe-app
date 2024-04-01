import "../styles/App.css";
import { Header } from "./header/Header";
import { GetRandomRecipe } from "./GetRandomRecipe";
import { Welcome } from "./welcome/Welcome";
import { useEffect, useState } from "react";
import { Meats } from "./ingredients/Meats";
import { Cuisine } from "./ingredients/Cuisine";
import { Pagination } from "antd";


function App() {
  const [protein, setProtein] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [popular, setPopular] = useState([]);

  const [welcome, setWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => setWelcome(false), 2500);
  }, []);
  if (welcome) {
    return <Welcome />;
  }

  return (
    <div className="App">
      <Header />
     
      <Cuisine setCuisine={setCuisine}/>

      <Meats setProtein={setProtein} />
      <GetRandomRecipe protein={protein} cuisine={cuisine} setPopular={setPopular} popular={popular} />
      <Pagination defaultCurrent={1} total={500} />

    </div>
  );
}

export default App;
