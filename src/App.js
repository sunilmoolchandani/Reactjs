import logo from './logo.svg';
import './App.css';
import {CORE_CONCEPTS} from'./Data'

function Dataget({image,title,description}){
  return(
    <div>
      <img src={image}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


function App() {
  console.log("coreee",CORE_CONCEPTS[0].description)
  return (
    <div className="App">
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
      <Dataget image={CORE_CONCEPTS[0].image}/>
      <Dataget title={CORE_CONCEPTS[0].title}/>
      <Dataget description={CORE_CONCEPTS[0].description}/>

      <Dataget {...CORE_CONCEPTS[1]}/>
    </div>
  );
}

export default App;
