import "../styles/App.css";
import { Header } from "./header/Header";
import { GetRandomRecipe } from "./apiSettings/GetRandomRecipe";
import { Welcome } from "./welcome/Welcome";
import { useEffect, useState } from "react";
import { Meats } from "./query-params/Meats";
import { Cuisine } from "./query-params/Cuisine";
import { Type } from "./query-params/Type";
import { Searches } from "./searchMethod/Searches";
import { SearchExplanation } from "./searchMethod/SearchExplanation";
import { SearchesHorizontal } from "./searchMethod/SearchesHorizontal";
import { GetRandomPopularRecipe } from "./apiSettings/GetRandomPopularRecipe";
import { GetRecipeByIngredients } from "./apiSettings/GetRecipeByIngredients";

function App() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(true);
  const [type, setType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [protein, setProtein] = useState("");

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
      {show === false ? <SearchesHorizontal setSearch={setSearch} /> : null}
      {show === true ? (
        <>
          <SearchExplanation />
          <Searches setSearch={setSearch} setShow={setShow} />
        </>
      ) : null}

      <div search={search}>
        {search === "option1" && show === false ? (
          <div className="App">
            <Type setType={setType} />

            <Cuisine setCuisine={setCuisine} />

            <Meats setProtein={setProtein} />

            <GetRandomRecipe protein={protein} cuisine={cuisine} type={type} />
          </div>
        ) : search === "option2" && show === false ? (
          <GetRecipeByIngredients />
        ) : search === "option3" && show === false ? (
          <GetRandomPopularRecipe />
        ) : null}
      </div>
    </div>
  );
}

export default App;
