import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery, useMutation} from "react-query";
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

const addHero = async ({name, alterEgo}: {name: string, alterEgo:string})=>{

 const res = await  fetch(`http://localhost:4000/superheroes`, {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({name, alterEgo}),
  });

  if(!res.ok){
    throw new Error("something went wrong");
  }
  else{
    return res.json();
  }
}

export const RQSuperHeroesPage = () => {
  const [isEnabled, setEnabled]= useState(false);
  const {isLoading, isError, error, data, refetch} = useSuperheroes(isEnabled, setEnabled, selectorFunction);
  const [heroName, setHeroName] = useState("")
  const [alterEgo, setAlterEgo] = useState("");
  const mutation = useMutation(addHero);
  

  const onSubmit= ()=>{
    console.log("add hero button pressed");
    console.log(heroName);
    console.log(alterEgo);
    mutation.mutate({name: heroName, alterEgo});
  } 

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
        <span>
          <input type="text" placeholder = "name" onChange={(e)=>{setHeroName(e.target.value)}} value = {heroName} />
          <input type="text" placeholder = "alter ego" value = {alterEgo} onChange={(e)=>{setAlterEgo(e.target.value)}} />
          <button onClick= {onSubmit} >Add Hero</button>
        </span>
        
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