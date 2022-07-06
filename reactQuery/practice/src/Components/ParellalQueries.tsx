import React from 'react'
import { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

type superHero= {
    id: number,
    "name": string,
    "alterEgo": string
  }


  const fetchHeroes = async () => {
    const res = await fetch("http://localhost:4000/superheroes");
    if(!res.ok){
      throw new Error("Something went wrong!");
    }
    return res.json();
  };

  const fetchFriends = async () => {
    const res = await fetch("http://localhost:4000/friends");
    if(!res.ok){
      throw new Error("Something went wrong!");
    }
    return res.json();
  };


export default function ParellalQueries() {
//do 2 queries at the same time

const {isLoading: heroesLoading} = useQuery("superheroes_names",fetchHeroes);
const  {isLoading: friendsLoading}= useQuery("friends",fetchFriends);

if(heroesLoading||friendsLoading){
  return <div>is Loading</div>
}

  return (
    <div>ParellalQueries</div>

  )
}
