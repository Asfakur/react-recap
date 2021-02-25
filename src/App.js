import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [nayoks, setNayoks] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])

  // const nayoks = ['Jasim', 'Deepjol', 'BappaRaj', 'Omar Sani', 'Alamgir'];
  return (
    <div className="App">
      
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id}></Nayok>)
      }
      <Nayok name="Jasim" age="50"></Nayok>
      <Nayok name="Sakib Khan"></Nayok>
      <header className="App-header">
        

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(1);
  
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  // return <div style={{border:'2px solid red'}}>
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok {props.name}</h1>
      <h3>I have done 5 movies in {props.age || 30} years</h3>
    </div>
  ) 
  
}

export default App;
