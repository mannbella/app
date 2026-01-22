import './App.css';
import LiquidEther from './components/LiquidEther';
import FuzzyText from './components/FuzzyText';

const THEME_COLORS = [ '#5227FF', '#FF9FFC', '#B19EEF' ]

const ETHER_PROPS = {
  mouseForce: 20,
  cursorSize: 100,
  isViscous: true,
  viscous: 30,
  iterationsViscous: 32,
  iterationsPoisson: 32,
  resolution: 0.6,
  isBounce: true,
  autoDemo: true,
  autoSpeed: 0.7,
  autoIntensity: 2.5,
  takeoverDuration: 0.25,
  autoResumeDelay: 3000,
  autoRampDuration: 0.6,
};

const FUZZ_PROPS = {
  baseIntensity: 0.2,
  hoverIntensity: 0.5,
  enableHover: true
}

function App() {
  return (
    <div className="liquid-ether-container">
      <div className="bg-wrapper">
        <LiquidEther
          {...ETHER_PROPS}
          color0={THEME_COLORS[0]}
          color1={THEME_COLORS[1]}
          color2={THEME_COLORS[2]}
        />
      </div>

      <main className="content-overlay">
        <div className="interactive-content">
          <FuzzyText {...FUZZ_PROPS}>
            Welcome
          </FuzzyText>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
        </div>
      </main>
    </div>
  );
}

export default App;
