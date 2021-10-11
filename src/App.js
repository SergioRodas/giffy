import './App.css';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext';
import { Link, Route } from 'wouter'
import { GifsContextProvider } from './context/GifsContext';
import { Suspense } from 'react';



function App() {
  return (
    <StaticContext.Provider value={{name:'Eric Cartman'}}>
      <div className="App">
      <Suspense>
        <section className="App-content">
        <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
        <GifsContextProvider>
          <Route 
            component={Home} 
            path="/"/>
          <Route 
            component={SearchResults} 
            path="/search/:keyword"/>
          <Route 
            component={Detail} 
            path="/gif/:id"/>
          <Route 
            component={() => <h1>Página no encontrada :(</h1>}
            path="/404"
          />
        </GifsContextProvider>
        </section>
      </Suspense>
      </div>
    </StaticContext.Provider>
  )
}

export default App
