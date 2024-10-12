import React from "react"
const Dev = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} j.k.k {props.heroname}
            </h1>
            {props.children}
        </div>
    )

}
export default Dev

// function Fred()
// {
//     return <h1>My sweet flower</h1>
// }
// export default Fred

// const Dev = props => {
//     console.log(props)
// return <h1>Welcome to my Town {props.name} j.kp {props.heroname} </h1>
// }
// export default Dev

//you can see in console object has property name  and
//a vale is aksat , dara , lara
//three object corresponding to the three components
//so props is just an object that contains the attribute
//and their values which have been passed from the parent
//component

//so if you want to display the name that has passed the
//Dev component we need to use curly braces then "props" dot name so
//we need to instead ask react to evaluate the JSX expression and we do that by wrapping the 
//expressiion with curly braces is a feature of GFX 