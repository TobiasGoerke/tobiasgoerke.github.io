import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {

    return (
        <div className="App">
            <Header/>
            <About/>
            <Resume/>
            <Portfolio/>
            {/* TODO implement eventually? <Slideshow/>*/}
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
