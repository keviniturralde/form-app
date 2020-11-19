import React from 'react';

function Character(props) {

return (
    <div>
        <p>{props.Character.name}</p> 
        <img alt="DBZ character" src={props.Character.img}/>
    </div>
)
}

export default Character