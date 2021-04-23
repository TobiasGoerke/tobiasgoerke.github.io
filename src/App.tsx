import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

const App = () => {

    return (
        <div className="App">
            <Header/>
            <About/>
            <Resume/>
            <Portfolio/>
        </div>
    );
}

export default App;
