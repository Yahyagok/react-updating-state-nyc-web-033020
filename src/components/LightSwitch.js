// Code ClickityClick Component Here
import React from 'react';
 
class LightSwitch extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      toggled: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState(previousState => {
        return {
            toggled: !previousState.toggled  
        }
    })

    
  };

 
  render() {
     
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click me!
        {this.state.toggled ? "ON" : "OFF"}
        </button>
       
      </div>
    );
  }
}
 
export default LightSwitch;
 
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
 
import ClickityClick from './components/ClickityClick';
 
ReactDOM.render(<ClickityClick />, document.getElementById('root'));