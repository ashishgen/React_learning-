

// this is a first way destructure give parameter

// const Boss = ({name, heroname}) => {
    
//     return (
//         <div>
//             <h1>
//                 Hello {name} a.k.a {heroname}
//             </h1>
//         </div>
//     )
// } 
// export default Boss

//this is the second way

// const Boss = props => {
//     const {name, heroname} =props
//     return (
//         <div>
//             <h1>
//                 Hello {name} a.k.a {heroname}
//             </h1>
//         </div>
//     )
// } 
// export default Boss

//now with class components

// import React, { Component } from 'react'

// class Boss extends Component {
//   render() {
//     const {name, heroname} = this.props
//     return (
//       <h1>
//         Welcome {this.props.name} a.k.a {this.props.heroname}
//       </h1>
//     )
//   }
// }

// export default Boss

//Now you can also remove this.props


// import React, { Component } from 'react'

// class Boss extends Component {
//   render() {
//     const {name, heroname} = this.props
//     return (
//       <h1>
//         Welcome {name} a.k.a {heroname}
//       </h1>
//     )
//   }
// }

// export default Boss

//Now with state use

import React, { Component } from 'react'

class Boss extends Component {
  render() {
    const {name, heroname} = this.props
    //const {state1, state2} = this.state
    return (
      <h1>
        Welcome {name} a.k.a {heroname}
      </h1>
    )
  }
}

export default Boss