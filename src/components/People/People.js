import React from 'react';

const People = (props) => {
    const {id,name,image,email,gender,phonenumber,salary}=props.people;
  
    return (

 
   

       <div >
    <h3>the people name is {name}</h3>
            <p>id:{id}</p>
            <img src={image} alt="" />
            <p>email:{email}</p>
            <p>gender:{gender}</p>
            <p>phonenumber:{phonenumber}</p>
            <p>salary:{salary}</p>
        </div>

       



        
    );
};

export default People;