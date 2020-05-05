import React from 'react';
import logo from '../../../images/background-main.jpg';

const Logo = () => (
    <div className = 'logo'>
            <img src = {logo} style = {{width: "250px", height: "250px",borderRadius: "8px"}}/>
    </div>
)

export default Logo;