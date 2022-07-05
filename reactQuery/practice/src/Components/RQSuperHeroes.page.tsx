import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { idText } from 'typescript';
type superHero= {
  id: number,
  "name": string,
  "alterEgo": string
}
const fetchUsers = async () => {
  const res = await fetch("http://localhost:4000/superheroes");
  if(!res.ok){
    throw new Error("Something went wrong!");
  }
  return res.json();
};

export const RQSuperHeroesPage = () => {
  const { isLoading, error, data, isFetching, isError } = useQuery("superheroes_names",fetchUsers, {
    staleTime: 5 * 1000
  });


    if(isLoading){
      return (<h2>Loading!</h2>)
    }

    if(isError && error instanceof Error){
      return (
        <h2>{error.message}</h2>
      )
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