import "../styles/App.css";
import { Header } from "./header/Header";
import { GetRandomRecipe } from "./apiSettings/GetRandomRecipe";
import { Welcome } from "./welcome/Welcome";
import { useEffect, useState } from "react";
import { Meats } from "./query-params/Meats";
import { Cuisine } from "./query-params/Cuisine";
import { Type } from "./query-params/Type";
import { SearchByIng } from "./searchMethod/SearchByIng";

function App() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [protein, setProtein] = useState("");
  const [popular, setPopular] = useState([]);

  const [welcome, setWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => setWelcome(false), 2500);
  }, []);
  if (welcome) {
    return <Welcome />;
  }

  return (
    <div>
      <Header />
      <SearchByIng setSearch={setSearch} />

      <div search={search}>
        {search === "option1" ? (
          <div className="App">
            <Type setType={setType} />

            <Cuisine setCuisine={setCuisine} />

            <Meats setProtein={setProtein} />

            <GetRandomRecipe
              protein={protein}
              cuisine={cuisine}
              setPopular={setPopular}
              popular={popular}
              type={type}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
