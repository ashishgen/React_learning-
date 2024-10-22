//why we use higher order components
//To share common Functionality between components

import React, { Component } from 'react'
//higher we use
import UpdatedComponent from './withCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // incrementCount = () => {
    //     this.setState(prevState =>{
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }
  render() {
    
    const {count, incrementCount} =this.props
    return (
      <button onClick= {incrementCount}> 
      Clicked {count} times</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)