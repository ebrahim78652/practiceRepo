import React, { useState } from 'react'
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

  const [isEnabled, setEnabled]= useState(false);
  const { isLoading, error, data, isFetching, isError, refetch } = useQuery("superheroes_names",fetchUsers, {
    staleTime: 5 * 1000,
    refetchInterval: (data: undefined|superHero[])=>{
      if(data!==undefined && data.length===4){
        setEnabled(false);
        return false
      }
      
      return 1000;
    }, 
    enabled: isEnabled
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
        {data && <div>
          {data.map((element: superHero) => {
            return <div key={element.id}>{element.name}</div>
          })}
        </div>}
        <button onClick={()=>{
          setEnabled(true);
          refetch()}}>Fetch heroes</button>
      </>
    )
  }