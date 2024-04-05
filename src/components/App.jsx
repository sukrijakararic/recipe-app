import "../styles/App.css";
import { Header } from "./header/Header";
import { GetRandomRecipe } from "./apiSettings/GetRandomRecipe";
import { Welcome } from "./welcome/Welcome";
import { useEffect, useState } from "react";
import { Meats } from "./query-params/Meats";
import { Cuisine } from "./query-params/Cuisine";
import { Type } from "./query-params/Type";
import { SearchByIng } from "./searchMethod/SearchByIng";
import { SearchExplanation } from "./searchMethod/SearchExplanation";

function App() {
  const [search, setSearch] = useState("");
  const [explanation, setExplanation] = useState(true);
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
      {explanation === true ? <SearchExplanation /> : null}
      <SearchByIng setSearch={setSearch} setExplanation={setExplanation} />

      <div search={search}>
        {search === "option1" && explanation === false ? (
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
        ) : search === "option2" && explanation === false ? null : null}
      </div>
    </div>
  );
}

export default App;
