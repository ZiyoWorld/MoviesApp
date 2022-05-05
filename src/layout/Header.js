import React, { Component } from 'react';

class Header extends Component {
    
    state = {  }
    render() { 
        return <header>
            <a href="#!"> Creative Movie App</a>
            <ul>
                <li><a href="#!">Movies</a></li>
                <li><a href="#!">Series</a></li>
                <li><a href="#!">Logout</a></li>
            </ul>
        </header>;
    }
}
 
export default Header;