
import './App.css';
import Greet  from './components/compo2';
import React, { Component} from 'react';
import  Welcome  from "./components/class_compo1"
import Hello from './components/with_jsx_or_without_jsx'; 
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet />
        <Welcome />
        <Hello />

      </div>
    );
  }
}



export default App;
