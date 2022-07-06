import React from 'react'
import { useState } from 'react'
import { QueryClient, QueryClientProvider, useQueries, useQuery } from "react-query";

type heroIds = {
    heroes: number[]
}

const fetchHeroById = async (heroId:number)=>{

    const res = await fetch(`http://localhost:4000/superheroes/${heroId}`);
    if(!res.ok){
      throw new Error("Something went wrong!");
    }
    else{
      console.log(res);
    }
    return res.json();
  }
  

export default function DynamicParellalQueries({heroes}: heroIds) {

    useQueries(heroes.map(heroId=>
        {return {
            queryKey: [ "hero_info", heroId], 
            queryFn: ()=>{fetchHeroById(heroId)}
         }})) 

        

  return (
    <div>DynamicParellalQueriespage</div>
  )
}
