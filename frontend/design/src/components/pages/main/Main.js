import React, {Component} from 'react';
import Header from './Header';
import Infors from './Infors';
import Instructions from './Instructions';
import "./styles.css";

export default class Main extends Component {
    render(){
        return(
            <div>
                <Header />
                <Infors />
                <Instructions />
            </div>
        )
    }
}