import React, { Component } from 'react'
import Childcomponent from './childcomponent'

class Parentcomponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: `Parent`
      }
      this.greetparent = this.greetparent.bind(this)
    }
    greetparent(ChildName){
        alert(`Hello ${this.state.parentName} from ${ChildName}`)
    }
  render() {
    return (
        <div>
      <Childcomponent greethandler={this.greetparent} />
      </div>
    )
  }
}

export default Parentcomponent