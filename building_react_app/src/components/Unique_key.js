function HomeList(){
    const Items = [
       { id:1,
        fridge: "LG",
        Tv: "Sony",
        Washing_Machine: "Samsung",
        Air_conditioner: "Lyod"
    },
    { id:2,
        fridge: "Sony",
        Tv: "LG",
        Washing_Machine: "Whirlpool",
        Air_conditioner: "Sony"
    },
    { id:1,
        fridge: "Samsung",
        Tv: "LG",
        Washing_Machine: "Samsung",
        Air_conditioner: "Lyod"
    },
    ]
    const  Itemlist = Items.map(items => <Items key="unique" Items={Items} />)
    return <div>{Items}</div>
}
export default HomeList