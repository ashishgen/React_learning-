import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value', this.state.count)
        // })
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
        console.log(this.state.count)
    // New method increament five 
    }
    incrementFive(){
        this.increment() //simple call imcreament method
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
    //     <div>
    //   <div>Count -{this.state.count}</div>
    //   <button onClick={() =>this.increment()}>Increment</button>
    //   </div>
        <div>
        <div>Count -{this.state.count}</div>
        <button onClick={() =>this.incrementFive()}>Increment</button>
        </div>
    )
  }
}

export default Counter

//snippet.create class component jst type rce+tab
//snippet create constructor jst rconst+tab