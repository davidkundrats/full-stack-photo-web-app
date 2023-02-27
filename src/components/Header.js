import React, { Component } from 'react';

class Header extends Component {

    render() { 
        return (
            <header className='row block center'>
                <div>
                    <a href="#/">
                     <h1> 
                        bsp.photo
                     </h1>
                    </a>
                </div>
                <div> 
                    <a href='#/cart'>Cart </a><a href='#/about'> About</a>
                </div>
            </header>
        ); 
    }
}


export default Header;
