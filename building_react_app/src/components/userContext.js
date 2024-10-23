import React from "react";
//step 1 of Context 
//we use default value Codevolution as a default value
const UserContext = React.createContext('Codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer
 
export { UserProvider,UserConsumer }
//use default UserContext
export default UserContext