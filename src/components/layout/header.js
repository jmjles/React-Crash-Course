import React from 'react';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}
const headerStyle = {
    textDecoration: 'bold',
    color: 'white',
    background:'black',
    padding: '10px'
}
export default Header;