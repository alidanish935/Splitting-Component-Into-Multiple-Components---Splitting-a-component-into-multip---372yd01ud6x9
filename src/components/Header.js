import React from "react";
function Header(props) {
    
    
    return (
        <div id="header">
            <header id={props.id}>{props.content}</header>
        </div>
    )
}

export default Header;

// import React from 'react';

// const Header = (props) => {
//     return (
//         <div id='header'>
//             <header id={props.id}>
//             <div>{props.content}</div>
//                 </header>
//         </div>
//     )
// }
// export default Header;
