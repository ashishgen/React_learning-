import React, { Component } from 'react'

 class UserGreeting extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: true
  }
}

  render() {
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>
    // return this.state.isLoggedIn ? (<div>WElcome Ashish</div>) : (<div>Welcome Guest</div>)
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Vishwas</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    // if (this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome Ashish
    //         </div>
    //     )
    // }else {
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
    // return (<div>
    //      <div>Welcome Ashish</div>
    //      <div>Welcome Dexi</div>
    // </div>
     
    // )
  }
}

export default UserGreeting