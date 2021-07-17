import React from 'react';

const Value = (props) => {

    const value = props.value;


    let total =0;
    for (let i = 0; i < value.length; i++) {
        const people = value[i];
        total = Math.round(total + people.salary);
        parseInt(total);
        
    }
    return (
        <div>
            <h1>All values</h1>
                <p><small>Oder summery : {value.length}</small></p>
                <p><small>Monthly salary:{total}</small></p>
                <p><small>Yearly salary :{total * 12} </small></p>
        </div>
    );
};

export default Value;