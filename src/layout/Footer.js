import React, { Component } from 'react';

class Footer extends Component {
    
    state = {  }
    render() { 
        return ( <footer className='page-footer'>
            <div className="page-copyright">
                <div className="container">
                    <h3>&copy; {new Date().getFullYear()} CopyRight Reserved</h3>
                    
                </div>
            </div>
        </footer> );
    }
}
 
export default Footer;