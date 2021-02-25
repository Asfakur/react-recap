import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Jasim', 'Deepjol', 'BappaRaj'];
  return (
    <div className="App">
      
      <Nayok name="Jasim" age="50"></Nayok>
      <Nayok name="Sakib Khan"></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
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
