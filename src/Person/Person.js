import React from 'react';


const person = ( props ) => {
    
    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I'm {props.name} and we are {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;