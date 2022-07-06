import React from 'react';

import './App.css';
import { HomePage } from './Components/Home.page'
import { RQSuperHeroesPage } from './Components/RQSuperHeroes.page'
import { SuperHeroesPage } from './Components/SuperHeroes.page'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQSuperHeroesPageTest } from './Components/RQSuperHeroesTest';
import HeroInfo from './Components/HeroInfo.page';
import ParellalQueries from './Components/ParellalQueries';
import DynamicParellalQueries from './Components/DynamicParellalQueries.page';
import DependentQuery from './Components/DependentQuery.page';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
        <QueryClientProvider client={queryClient}>
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
          <li>
            <Link to='/rq-super-heroes_test'>RQ Super Heroes Test</Link>
          </li>
          <li>
            <Link to='/parellal-queries'>Parellal Queries</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/super-heroes' element = {<SuperHeroesPage/>}>
        </Route>

        <Route path='/rq-super-heroes' element = {<RQSuperHeroesPage/> }>
        </Route>

        <Route path='/rq-super-heroes_test' element = {<RQSuperHeroesPageTest/> }>
        </Route>

        <Route path='/rq-super-heroes-info/:id' element = {<HeroInfo/> }>
        </Route>

        <Route path='/parellal-queries' element = {<ParellalQueries/> }>
        </Route>
        <Route path='/dynamic-parellal-queries'  element = {<DynamicParellalQueries heroes={[1,3]} />}>  </Route>

        <Route path='/dependent-query'  element = {<DependentQuery />}>  </Route>
      

        <Route path='/' element = {<HomePage />}>
    
        </Route>
      </Routes>


    
      <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>

    </div>
  )
}

export default App


