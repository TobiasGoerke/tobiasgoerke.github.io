import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";

const App = () => {

    return (
        <div className="App">
            <Header/>
            <About/>
        </div>
    );
}

export default App;
