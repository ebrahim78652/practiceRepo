import { Routes, Route, useParams } from 'react-router-dom';
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "react-query";

type superHero= {
  id: number,
  "name": string,
  "alterEgo": string
}



const fetchHeroById = async ({queryKey}:{queryKey:(number | undefined|string)[]} )=>{

  const res = await fetch(`http://localhost:4000/superheroes/${queryKey[1]}`);
  if(!res.ok){
    throw new Error("Something went wrong!");
  }
  else{
    console.log(res);
  }
  return res.json();
}

export default function HeroInfo() {
  const queryClient = useQueryClient()
  let { id } = useParams();
  const converted= id?+id:undefined


  const {data , isFetching, isLoading} = useQuery(["hero_info" , converted], fetchHeroById, {
    initialData: () => {
    
      const res : Array<superHero>|undefined = queryClient.getQueryData("superheroes_names");

      console.log(res);
     if( res ){
      console.log("detected that it is an array");
      const toReturn= res.find(d=>d.id===converted);
      console.log(toReturn);
      return toReturn 
     }
     else{
      return undefined;
     }
    }, 
    initialDataUpdatedAt: () =>
    queryClient.getQueryState("superheroes_names")?.dataUpdatedAt,
    staleTime: 1000*30,

})
    
    
 


if(data){
  return ( 
    <div>{data?.name} - {data?.alterEgo}</div>
  )
}
 

  if(isLoading){
    return <div>is Loading</div>
  }

  if(isFetching){
    return <div>is Fetching</div>
  }

  return (<div>random </div>)
  
}
