import { useEffect, useState } from "react"

const URL = "https://api.spoonacular.com/recipes/complexSearch"

export const Api = () => {
    const [results, setResults] = useState([]);
    const controller = new AbortController();

    useEffect(() => {
        async function getData() {
            const response = await fetch(URL);
            const data = await response.json();
            setResults(data);
        }

        getData();

        console.log(results, "results");

        return () => {
            controller.abort();
        }
    },[])


  return (
    <div>Api</div>
  )
}
