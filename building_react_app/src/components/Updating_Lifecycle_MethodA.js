//child component making

import React, { Component } from 'react'

import Updating_Lifecycle_MethodB from './Updating_Lifecycle_MethodB'
class Updating_Lifecycle_MethodA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ashish'
      }
      console.log('Updating_Lifecycle_MethodA constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('Updating_Lifecycle_MethodA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Updating_Lifecycle_MethodA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('Updating_Lifecycle_MethodA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Updating_Lifecycle_MethodA getSnapshotBeforeUpdate')
    return null
    }
    componentDidUpdate(){
        console.log('Updating_Lifecycle_MethodA componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'Codevelution'
        })
    }
  render() {
   
        console.log('Updating_Lifecycle_MethodA render')
        return <div> <div>Updating_Lifecycle_MethodA</div>
        <button onClick={this.changeState}>Change state</button>
        <Updating_Lifecycle_MethodB />
        <Updating_Lifecycle_MethodB />
        </div>
    
  }
}


export default Updating_Lifecycle_MethodA