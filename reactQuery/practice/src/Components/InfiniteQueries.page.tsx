import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery, useInfiniteQuery } from "react-query";


type superHero= {
    id: number,
    "name": string,
    "alterEgo": string
  }
  type key= {queryKey: (string|number)[], pageParam?: number }

  const fetchColors = async ({ pageParam} : key) => {
    console.log(`The param is : ${pageParam}`);
    if(pageParam===undefined){
        pageParam=0
    }
    const res = await fetch(`http://localhost:4000/colors?_page=${pageParam}&_limit=2`);
    if(!res.ok){
      throw new Error("Something went wrong!");
    }
    return res.json();
  };

export default function InfiniteQuery() {
    const {hasNextPage, hasPreviousPage, fetchNextPage, isLoading, isFetchingNextPage, isFetchingPreviousPage,data, fetchPreviousPage} = useInfiniteQuery(["infinite_colors"], fetchColors, {
        getNextPageParam(lastPage, allPages){
            console.log(allPages.length);
            console.log(lastPage);
            if(allPages.length<=6){
                return allPages.length;
            }
            return undefined
        }, 

        //the number retruned from here will be given to the query function as a parameter
        getPreviousPageParam(firstPage, allPages){
            if(allPages.length>1){
                return allPages.length - 1;
            }
            return undefined
        }
    })
  return (
    <div>
      {
        data?.pages.map((element)=>{
            return element.map((page:{id:number, color:string})=>{
                return <div>{page.color}</div>
            })}
            )
    }

    <button disabled ={!hasNextPage} onClick = {()=>{
        fetchNextPage();
    }}>Next Page</button>


    <button disabled = {!hasPreviousPage}onClick = {()=>{
        fetchPreviousPage();
    }}>Previous Page</button>


    </div>
  )
}
