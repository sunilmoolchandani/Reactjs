import logo from './logo.svg';
import './App.css';
import {CORE_CONCEPTS} from'./Data'
import TabButton from '../src/Components/TabButton';
import { useState } from 'react';
import {EXAMPLES} from './Data'


// it also used destructing method
// function Dataget({image,title,description}){
//   return(
//     <div>
//       <img src={image}/>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }
function Dataget(props){
  return(
    <div>
      <img src={props.image}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}




function App() {
  const [selectedTopic,setselectedTopic]=useState('')
  function handleSelect(handleSelectvalue){
    setselectedTopic(handleSelectvalue)
    // console.log("coreee",EXAMPLES['Components'])
  }
  
  
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



      <section id="examples">

{/* <TabButton onSelect={handleSelect} label="One"/>
<TabButton label="Two"/>
<TabButton label="Three"/>
<TabButton label="Four"/> */}
<TabButton isSelected={selectedTopic=='Components'} onSelect={()=>handleSelect("Components")}>Components</TabButton>
<TabButton isSelected={selectedTopic=='JSX'} onSelect={()=>handleSelect('JSX')}>JSX</TabButton>
<TabButton isSelected={selectedTopic=='Props'} onSelect={()=>handleSelect('Props')}>Props</TabButton>
<TabButton isSelected={selectedTopic=='State'} onSelect={()=>handleSelect('State')}>State</TabButton>
</section>

<div>
  <h3></h3>
  <p></p>
  <code></code>
  
  {!selectedTopic ? "pls select topic":EXAMPLES[selectedTopic].title}
  
</div>
    </div>




  );
}

export default App;
