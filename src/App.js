import React from 'react'
import CharacterContainer from './Containers/CharacterContainer'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
          <CharacterContainer />
      </div>
    );
  }
}

export default App;
