import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Company from './components/Company/Company';


function App() {
  const [peoples,setPeople]=useState([]);

    useEffect(()=>{
      fetch('https://mocki.io/v1/a5e5735f-e946-48d3-aaea-833032dc2633')
      .then(res=>res.json())
      .then(data=>setPeople(data))
      .catch(error=>console.log(error))
    },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>People loaded:{peoples.length}</h1>
      
        <Header></Header>
        
        <ul>
        {
          peoples.map(people=><Company people={people}></Company>)
        }
        </ul>
        
          
          
       
        
      </header>
    </div>
  );
}

export default App;
