import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
type superHero= {
    id: number,
    "name": string,
    "alterEgo": string
  }
  type key= {queryKey: (string|number)[]}

  const fetchColors = async ({queryKey} : key) => {
    const res = await fetch(`http://localhost:4000/colors?_page=${queryKey[1]}&_limit=2`);
    if(!res.ok){
      throw new Error("Something went wrong!");
    }
    return res.json();
  };

export default function PaginatedQuery() {
    
    const [page, setPage]= useState(1);
    const {isFetching, isLoading, isSuccess, data, isPreviousData} = useQuery(["colors", page],fetchColors, {
        keepPreviousData: true,
    });


  return (
    <>
   
      <div>{
        data?.map((element: {id:number, color:string})=>{return <div>{element.color}
        </div>})}</div>

        <button onClick  = {()=>{setPage(oldPageNum=>oldPageNum-1)}} disabled = {page===1}>Previous Page</button>
        <span>current Page: {page}</span>
        <button disabled = {isPreviousData} onClick  = {()=>{setPage(oldPageNum=>oldPageNum+1)}} >Next Page</button>
        {isLoading? <div>Loading</div>: null}
        {isFetching? <div>Fetching</div>: null}

    </> 
    
    )
  
}
