import React from 'react';
import Character from '../Components/Character'
import CharacterForm from '../Components/CharacterForm';
import characters from '../api'

class CharacterContainer extends React.Component {

    state = {
        api: characters
    }

    // renderCharacter = () => {
    //     return this.props.Characters.map(CharacterObj => <Character key={CharacterObj.id} Character={CharacterObj}/>)
    // }

    submitHandler = (newChar) => {
        let newArray= [...this.state.api, newChar]
        this.setState({api: newArray})
    }
    
    render() {
        let characters = this.state.api.map(CharacterObj => <Character key={CharacterObj.id} Character={CharacterObj}/>)  
        return (
            <div className='card'>
                <h1>Character Index</h1>
                <CharacterForm submitHandler={this.submitHandler} />
                {characters}
            </div>
        )
    }
}

export default CharacterContainer