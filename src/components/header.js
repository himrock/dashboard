import React, { Component } from 'react';
import logo from '../assests/logo.svg';
import profile from '../assests/profile.svg';
import '../styles/header.css';

class header extends Component {
    render() {
        return (
            <div>
            <div className='headerWrapper'>
                <div className='headerLeft'>
                    <img src={logo} alt="logo"></img>
                    <span>Intugine</span>
                </div>
                <div className='headerRight'>
                    <span>Home</span>
                    <span>Brands</span>
                    <span>Transporters</span>
                    <img src={profile} alt="logo"></img>
                </div>
                </div>
            </div>
        );
    }
}

export default header;