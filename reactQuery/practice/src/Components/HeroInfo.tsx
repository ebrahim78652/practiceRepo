import { Routes, Route, useParams } from 'react-router-dom';
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


const fetchHeroById = async ({queryKey}:{queryKey:(string | undefined)[]} )=>{

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

  let { id } = useParams();
  const {data, isLoading, error, isError, isFetching } = useQuery(["hero_info" , id], fetchHeroById)

  return (
    <div>{data?.name} - {data?.alterEgo}</div>
  )
}
