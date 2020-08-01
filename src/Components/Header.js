//fucntional component

import React from 'react';

const Header = () => {
    return ( 
        <div class="container">
        <nav class="navbar">
            <ul class="list">
                <li class="list-item"><a href="#" class="nav-link">Home</a></li>
            </ul>
            <ul class="list">
                <li class="list-item"><a href="#" class="nav-link">Contact</a></li>
            </ul>
            <ul class="list">
                <li class="list-item"><a href="#" class="nav-link">About</a></li>
            </ul>
            <ul class="list">
                <li class="list-item"><a href="#" class="nav-link">Reach us</a></li>
            </ul>
        </nav>
    </div>    
     );
}

export const Header2 = () => {
    return ( <>Header2</> );
}

export const Header3 = () => {
    return ( <>Header3</> );
}

export const Header4 = () => {
    return ( <></> );
}

export const Header56 = () => {
    return ( <>Hello</> );
}

export default Header;