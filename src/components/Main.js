import React from "react";
function Main(props) {
    
    
    return (
        <div id="main">
            <main id={props.id}>{props.content}</main>
        </div>
    )
}

export default Main;

// import React from 'react';

// const Main = (props) => {
//     return (
//         <div id="main">
//             <main id={props.id}>
//             <div>{props.content}</div>
//                 </main>
//         </div>
//     )
// }
// export default Main;

