import React, { Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            Message: 'Welcome visitor'
        }
    }
    changemessage(){
        this.setState({
            Message: "Thanks you for subscribing"
        })
    }

    render() {
        return (
            <div>
            <h1>
                {this.state.Message}
            </h1>
            <button onClick={() => this.changemessage()}>Subscribe</button>
            </div>
            )
        
    }
}
export default Message