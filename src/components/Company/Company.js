import React from 'react';
import './Company.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Value from '../Value/Value';


const Company = (props) => {
    console.log(props);


 const {id,name,image,email,gender,phonenumber,salary}=props.people;
  
    return (

 
    <div >

<div className="people-container">

   <div>
   <img src={image} alt="" />
   </div>

   <div>
   <p>id:{id}</p>
   <h3>the people name is {name}</h3>
            <p>email:{email}</p>
            <p>gender:{gender}</p>
            <p>phonenumber:{phonenumber}</p>
            <p>salary:{salary}</p>
            <button className="main-button" 
            onClick={()=>props.handleAddPeople(props.people)}>
             <FontAwesomeIcon icon={faUserPlus} />Add people</button>
   </div>
   
            
         
        </div>

       
        {/* <div className="result-container">
       
                <Value value={props.value}></Value>
            </div> */}

    </div>

        
       
    );
};

export default Company;