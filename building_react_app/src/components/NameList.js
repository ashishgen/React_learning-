import React from 'react'

function NameList() { 
    const person = [
    {   id:1,
        name: "Diana",
        age: 17,
        skill: "B.Tech"
    },
    {   id: 2,
        name: "Bruce",
        age: 24,
        skill: "M.Tech"
    },
    {   id: 3,
        name: "Mark",
        age: 19,
        skill: "M.B.A"
    }
]
const personlist = person.map(person =>( <h2>I am {person.name}.I am {person.age}. i m {person.skill}</h2>)

)
return <div>personList</div>
}

export default NameList
//     const personList =  person.map(person => 
//   (
//       <h2>
//         I am {person.name}. I am {person.age} years old. I Know {person.skill}
//       </h2>
//         // names.map(name => <h2>{name}</h2>)
//     ))
//     return <div>{personList}</div>


//  {
//     const names = ['Bruce', 'Clark', 'Diana']
//     const NameList =  names.map(name => <h2>{name}</h2>)
//   return (
//     <div>
//     {
//         NameList
//         // names.map(name => <h2>{name}</h2>)
//     }
        
//     </div>
// 