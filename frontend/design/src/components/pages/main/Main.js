import React from 'react';
import Header from './Header';
import Infors from './Infors';
import Instructions from './Instructions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css";

const Main = () => (
    <div className = "body-father">
        <Header />
        <Infors />
        <Instructions />
        <ToastContainer className = "toast-container" />
    </div>
)

export default Main;