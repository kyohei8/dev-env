import React from 'react';

/**
 * App
 */
class App extends React.Component{
  render(){
    const { test } = this.props;

    return (
      <div>
        <h1> 🌟 This is AWESOME site 🌟 </h1>
        <span>{test}</span>
      </div>
    );
  }
}

export default App;
