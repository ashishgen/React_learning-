import React, { Component } from 'react'

class Updating_Lifecycle_MethodB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ashish'
      }
      console.log('Updating_Lifecycle_MethodB constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('Updating_Lifecycle_MethodB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Updating_Lifecycle_MethodB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('Updating_Lifecycle_MethodB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Updating_Lifecycle_MethodB getSnapshotBeforeUpdate')
    return null
    }
    componentDidUpdate(){
        console.log('Updating_Lifecycle_MethodB componentDidUpdate')
    }
  render() {
   
        console.log('Updating_Lifecycle_MethodB render')
        return <div>Updating_Lifecycle_MethodB</div>
    
  }
}

export default Updating_Lifecycle_MethodB