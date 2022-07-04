import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
type superHero= {
  id: number,
  "name": string,
  "alterEgo": string
}

export const RQSuperHeroesPage = () => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
  axios.get('http://localhost:4000/superheroes'
  ).then((res) => {
    console.log(data);
    return res.data})
);

    if(isLoading){
      return (<h2>Loading!</h2>)
    }

    return (
      <>
        <h2>RQ Super Heroes Page</h2>
        <div>
          {data.map((element: superHero) => {
            return <div key={element.id}>{element.name}</div>
          })}
        </div>
      </>
    )
  }