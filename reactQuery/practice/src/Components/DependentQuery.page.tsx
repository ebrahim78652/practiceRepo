import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Link } from 'react-router-dom'

type key= {queryKey: string[]}
const fetchChannelId = async ({queryKey}: key)=>{
    const res = await fetch("http://localhost:4000/users");
    if(!res.ok){
      throw new Error("Something went wrong!");
    }
    return res.json();
} 

const fetchChannels = async ({queryKey}: key)=>{
console.log("fetch");

     const res = await fetch(`http://localhost:4000/channels?id=${queryKey[1]}`);
    if(!res.ok){
      throw new Error("Something went wrong!");
    }
    return res.json(); 
} 

export default function DependentQuery() {

const {data} = useQuery(["user", "codevolution"], fetchChannelId, {select: (data)=>{
    return data[0].channelId
}})

const id= data?data:undefined

console.log(data); 
const {data: random} = useQuery(["channels", data], fetchChannels, {enabled: !!id})

  return (
    <div>DependentQuery.page</div>
  )
}
