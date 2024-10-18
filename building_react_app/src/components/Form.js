import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
        //  step 2
        topic: 'react'

      }
    }
    //properties change from here use arrow handle
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentchange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopichange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    //To avoid fill the data when submit use preventdefault
        event.preventDefault()
    }
    
  render() {
    // Now last destructure the properties 
    // const { username, comments, topic } = this.state
    // now can remove this.state while use this
    return (
     <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>
                Comments
            </label>
            <textarea value={this.state.comments} onChange={this.handleCommentchange}></textarea>
        </div>
{/* step 1 option for firstly come to on JSX //Select tag */}
         <div>
            <label>Topic</label>
            {/* step 3 below onchange  which is going to the property similar to the previous handler*/}
            <select value={this.state.topic} onChange={this.handleTopichange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                

            </select>

         </div>
         <button type='submit'>Submit</button>
     </form>
    )
  }
}

export default Form