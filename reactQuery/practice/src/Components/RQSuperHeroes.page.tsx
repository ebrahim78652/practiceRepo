import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import useSuperheroes from '../Hooks/useSuperheroes';
import { Link } from 'react-router-dom'

type superHero= {
  id: number,
  "name": string,
  "alterEgo": string
}

const selectorFunction = (data: superHero[])=>{
  return data.map((element)=>{
      return {"name": element.name, id: element.id}
  })
}

export const RQSuperHeroesPage = () => {
  const [isEnabled, setEnabled]= useState(false);
  const {isLoading, isError, error, data, refetch} = useSuperheroes(isEnabled, setEnabled, selectorFunction);

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
          {data.map((element: {name: string, id:number}) => {
            return <div key={element.id}>
              <Link  to= {`/rq-super-heroes-info/${element.id}`}>{element.name}</Link>
            </div>
          })}
        </div>}
        <button onClick={()=>{
          setEnabled(true);
          }}>Fetch heroes</button>
      </>
    )
  }