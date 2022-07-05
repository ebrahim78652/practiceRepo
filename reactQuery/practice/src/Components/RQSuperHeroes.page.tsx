import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import useSuperheroes from '../Hooks/useSuperheroes';

type superHero= {
  id: number,
  "name": string,
  "alterEgo": string
}

export const RQSuperHeroesPage = () => {
  const [isEnabled, setEnabled]= useState(false);
  const {isLoading, isError, error, data, refetch} = useSuperheroes(isEnabled, setEnabled);

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
          }}>Fetch heroes</button>
      </>
    )
  }