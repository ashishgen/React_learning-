import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ashish'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
  render() {
   
        console.log('LifecycleB render')
        return <div>LifecycleB</div>
    
  }
}

export default LifecycleA