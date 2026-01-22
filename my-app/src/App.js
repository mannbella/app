import logo from './logo.svg';
import './App.css';
import React from "react"
import { AuroraBackground } from '@/components/ui/aurora-background';

function App() {
  return (
    <AuroraBackground>
      <div className="ombre-background">
        <header className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AuroraBackground>
  );
}

export default App;
