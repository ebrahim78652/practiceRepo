import React from 'react';

import './App.css';
import { HomePage } from './Components/Home.page'
import { RQSuperHeroesPage } from './Components/RQSuperHeroes.page'
import { SuperHeroesPage } from './Components/SuperHeroes.page'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
        <QueryClientProvider client={queryClient}>
      
      <Routes>
        <Route path='/super-heroes' element = {<SuperHeroesPage/>}>
        </Route>

        <Route path='/rq-super-heroes' element = {<RQSuperHeroesPage/> }>
        </Route>

        <Route path='/' element = {<HomePage />}>
    
        </Route>
      </Routes>


      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/super-heroes'>Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      </QueryClientProvider>

    </div>
  )
}

export default App


