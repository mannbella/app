import './App.css';
import Layout from './Layout';
import FuzzyText from './components/FuzzyText';
import PillNav from './components/PillNav';
import Logo from './assets/batman.jpg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';

const FUZZ_PROPS = {
  baseIntensity: 0.2,
  hoverIntensity: 0.5,
  enableHover: true
}

const PILL_PROPS = {
  logo: Logo,
  logoAlt: "superAwesomeLogo",
  items: [{label: 'Home', href: '/'}, {label: 'About', href: '/about'}, {label: 'Portfolio', href: '/portfolio'}, {label: 'Contact', href: '/contact'}],
  activeHref: "/",
  className: "custom-nav",
  ease: "power2.easOut",
  baseColor: "#ffffff",
  pillColor: "#ffffff",
  hoveredPillTextColor: "#000000",
  pillTextColor: "#000000",
  theme: "light",
  initialLoadAnimation: false
}

function App() {
  return (
    <Router>
      <div className="liquid-ether-container">
        <Layout>
          <main className="content-overlay">
            <div className="interactive-content">
              <PillNav{...PILL_PROPS}></PillNav>
              <Routes>
                <Route path="/" element={
                  <>
                  <FuzzyText {...FUZZ_PROPS}>
                  welcome
                  </FuzzyText>
                  <a className="App-link" href="https://github.com/mannbella" target="_blank" rel="noopener noreferrer">
                    Bella's Github
                  </a>
                  </>
                }/>
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </main>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
