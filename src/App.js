// import npm modules
import React, { Component } from 'react';

// import local files
import './App.css';
import Tweet from './Components/Tweets'

class App extends Component {
  render() {
    return (
      <div className='app container'>
        <Tweet />
      </div>
    );
  }
}

export default App;
