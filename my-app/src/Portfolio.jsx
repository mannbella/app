import Layout from './Layout';
import PillNav from './components/PillNav';
import Logo from './assets/batman.jpg';

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

function Portfolio() {
return (
      <div className="liquid-ether-container">
        <Layout>
          <main className="content-overlay">
            <div className="interactive-content">
              <PillNav{...PILL_PROPS}></PillNav>
              <a className="App-link" href="https://github.com/mannbella" target="_blank" rel="noopener noreferrer">
                Bella's Github
              </a>
            </div>
          </main>
        </Layout>
      </div>
  );
}

export default Portfolio;