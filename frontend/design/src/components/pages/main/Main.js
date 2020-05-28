import React from 'react';
import Header from './Header';
import Infors from './Infors';
import Instructions from './Instructions';
import "./styles.css";

const Main = () => (
    <div className = "body-father">
        <Header />
        <Infors />
        <Instructions />
    </div>
)

export default Main;