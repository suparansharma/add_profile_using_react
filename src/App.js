import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Company from './components/Company/Company';
import Value from './components/Value/Value';


function App() {
  const [peoples,setPeople]=useState([]);
  const [value,setValue]=useState([]);

  const handlerAddPeople = (people) =>{

    console.log("user added",people);
    const newPeople = [...value,people];
    setValue(newPeople);

  }

    useEffect(()=>{
      fetch('https://mocki.io/v1/ac7f7eca-9e28-4575-963d-305731cd5270')
      .then(res=>res.json())
      .then(data=>setPeople(data))
      .catch(error=>console.log(error))
    },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>People loaded:{peoples.length}</h1>
      
        <Header></Header>

        <div className="main-container">

<div className="sec-container">
   
<ul>
        {
          // <Company people={peoples}></Company>
           peoples.map(people=><Company people={people} handleAddPeople={handlerAddPeople} value={value} ></Company>)
        }
        </ul>
</div>

<div className="last-container">
<Value value={value} >
  
</Value>
</div>

        </div>

    
{/*         
        <ul>
        {
          // <Company people={peoples}></Company>
           peoples.map(people=><Company people={people} handleAddPeople={handlerAddPeople} value={value} ></Company>)
        }
        </ul> */}
        
          
          
       
        
      </header>
    </div>
  );
}

export default App;
