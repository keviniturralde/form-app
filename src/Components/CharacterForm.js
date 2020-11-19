import React from 'react'

function CharacterForm(props) {
    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            props.submitHandler({name: event.target[0].value})
            }}>
            <input type="text" placeholder="choose your character"/>
            <p>
            <input type='text' placeholder='img url' />
            </p>  
            <input type="submit" value="challenger approaches"/>
        </form>
    )
}

export default CharacterForm