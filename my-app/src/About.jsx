import Headshot from './assets/headshot.png';
import './App.css';

function About() {
return (
    <main className="content-overlay">
      <div className="interactive-content">
        <img src={Headshot} alt="super nice photo" className="headshot-photo"/>
      </div>
    </main>
  );
}

export default About;