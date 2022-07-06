import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


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


  
  export default function useSuperheroes(isEnabled: boolean = true, setEnabled?:React.Dispatch<React.SetStateAction<boolean>>, select?: (data: any) => {name: string, id:number}[]){

    const obj = useQuery("superheroes_names",fetchUsers, {
      staleTime: 5 * 1000,
      refetchInterval: (data: undefined|superHero[]|{name: string, id:number}[] )=>{
        if(data!==undefined && data.length===4){
          if(setEnabled){
            setEnabled(false);
          }
          return false
        }
        return 1000;
      }, 
      enabled: isEnabled,
      select,

    });

    return {
        ...obj, 
       
    }
}