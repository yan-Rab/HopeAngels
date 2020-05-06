import React from 'react';
import logo from '../../../images/background-main.jpg';

const Logo = () => (
    <div className = 'logo'>
            <img src = {logo} style = {{minWidth: "250px", minHeight: "250px",borderRadius: "8px",maxWidth: "400px",maxHeight: "400px"}}/>
    </div>
)

export default Logo;