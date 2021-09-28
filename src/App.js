import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';



function App() {
  return (
    <div className="App">
      <section className="App-content">
      <h1>App</h1>
      <Link to="/gif/mono">Gifs de monos</Link>
      <Link to="/gif/Messi">Gifs de Messi</Link>
      <Link to="/gif/SouthPark">Gifs de South Park</Link>
      <Link to="/gif/Rick&Morty">Gifs de Rick & Morty</Link>
      <Route component={ListOfGifs} path="/gif/:keyword"/>
      </section>
    </div>
  );
}

export default App;
