import Layout from './Layout';
import Headshot from './assets/headshot.png';
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

function About() {
return (
      <div className="liquid-ether-container">
        <Layout>
          <main className="content-overlay">
            <div className="interactive-content">
              <PillNav{...PILL_PROPS}></PillNav>
              <img src={Headshot} alt="super nice photo" className="headshot-photo"/>
            </div>
          </main>
        </Layout>
      </div>
  );
}

export default About;