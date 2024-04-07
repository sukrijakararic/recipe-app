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

function App() {
  const [search, setSearch] = useState("");
  const [explanation, setExplanation] = useState(true);
  const [type, setType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [protein, setProtein] = useState("");
  const [complex, setComplex] = useState([]);

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

      {explanation === true ? (
        <>
          <SearchExplanation />
          <Searches setSearch={setSearch} setExplanation={setExplanation} />
        </>
      ) : null}

      <div search={search}>
        {search === "option1" && explanation === false ? (
          <div className="App">
            <SearchesHorizontal setSearch={setSearch} />
            <Type setType={setType} />

            <Cuisine setCuisine={setCuisine} />

            <Meats setProtein={setProtein} />

            <GetRandomRecipe
              protein={protein}
              cuisine={cuisine}
              setComplex={setComplex}
              complex={complex}
              type={type}
            />
          </div>
        ) : search === "option2" && explanation === false ? (
          <>
            {" "}
            <SearchesHorizontal setSearch={setSearch} />{" "}
            <GetRandomPopularRecipe />{" "}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
