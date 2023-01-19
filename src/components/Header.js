import React from 'react';

const Header = (props) => {
    return (
        <div id={props.id}>
            {props.content}
        </div>
    )
}
export default Header;
