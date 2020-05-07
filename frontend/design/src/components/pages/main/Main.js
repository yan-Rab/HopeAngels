import React, {Component} from 'react';
import Header from './Header';
import Infors from './Infors';
import "./styles.css";

export default class Main extends Component {
    render(){
        return(
            <div>
                <Header />
                <Infors />
            </div>
        )
    }
}