import React from "react";
import ReactDOM  from "react-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default function(){
    return (
        <div id="container">
            <Header/>
            <Main />
            <Footer/>
        </div>
    )
}