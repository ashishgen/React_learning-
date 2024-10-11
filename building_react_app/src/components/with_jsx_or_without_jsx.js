import React from "react";

const Hello = () => {
  //with Jsx method  
    // return (
    //     <div>
    //         Hello Milly
    //     </div>
    // )

  //without Jsx method  therr parameter firt string , props ,html element
//return React.createElement('div',null, 'sunday is my favroite day')
return React.createElement('div',null, React.createElement('h1', {id: "hello", className: 'dummy'} , 'sunday is my favroite day'))


}
export default Hello;

//JSX difference [class->className, for->htmlFor, camelCase property naming convention ,onclick->onClick,tabindex->tabindex]