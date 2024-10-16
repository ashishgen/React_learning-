import React from "react"
function HomeList() {
    const Items = [
        {
            id: 1,
            fridge: "LG",
            Tv: "Sony",
            Washing_Machine: "Samsung",
            Air_conditioner: "Lyod"
        },
        {
            id: 2,
            fridge: "Sony",
            Tv: "LG",
            Washing_Machine: "Whirlpool",
            Air_conditioner: "Sony"
        },
        {
            id: 1,
            fridge: "Samsung",
            Tv: "LG",
            Washing_Machine: "Samsung",
            Air_conditioner: "Lyod"
        }
    ]
    const itemList = Items.map(item => (
        <h2>
            This is {item.id}.cool your item from{item.fridge}.Watch movie on {item.Tv}.Wash your cloth in{item.Washing_Machine}.Use {item.Air_conditioner} on summer.
        </h2>
    ))
    return <div>{itemList}</div>
}
export default HomeList