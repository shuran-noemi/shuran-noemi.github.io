import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Activities from './components/Activities';
import './App.css';
import "./css/All.css"
import News from "./components/News.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-layout">
                <div className="left-hero">
                    <Hero />
                </div>
                <div className="right-content">
                    <div style={{margin: "2rem"}}>
                        <About />
                        <News />
                        <Publications />
                        <Experience />
                        <Activities />
                        <div className="site-credit">
                            Site style inspired by <a href="https://github.com/LucyLing24/longling" target="_blank" rel="noopener noreferrer">LucyLing24/longling</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
