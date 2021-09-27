import { useState, useEffect } from 'react';
import './App.css';

const GIFS = [
  'https://media3.giphy.com/media/ygNrcLsFcOymvmbXiJ/giphy.gif?cid=ecf05e47wxc7s5brw0d9dazp21q6sk8927bg6767nnosg6vj&rid=giphy.gif&ct=g',
  'https://media2.giphy.com/media/Ane45y5p7y0HZokoBw/giphy.gif?cid=ecf05e47er2clsdmf4vhubssr6xeduu3lp5q8nq0bmiauvnk&rid=giphy.gif&ct=g'
]

const DIFFERENT_GIFS = [
  'https://media0.giphy.com/media/Rr7qHxZLZLCpy/giphy.gif?cid=ecf05e4794vt43b8f4xqmif7giv993fcpgaydpbc70b295zz&rid=giphy.gif&ct=g'
]

function App() {
  const [gifs, setGifs] = useState(GIFS)

  useEffect(function() {
    setGifs(DIFFERENT_GIFS)
  }, [])

  return (
    <div className="App">
      <section className="App-content">

      {
        gifs.map(singleGif => <img src={singleGif} alt="Messi gif"/>)
      }

        
      </section>
    </div>
  );
}

export default App;
