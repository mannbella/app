import Headshot from './assets/headshot.png';
import Pic1 from './assets/DSC_0097.JPG';
import Pic2 from './assets/DSC_0177.JPG';
import Pic3 from './assets/DSC_0531.JPG';
import TiltedCard from './components/TiltedCard';
import './App.css';
import { Element } from 'react-scroll';

const HEADSHOT = {
  imageSrc: Headshot,
  altText: "headshot",
  captionText: "headshot",
  containerHeight: "300px",
  containerWidth: "300px",
  imageHeight: "700px",
  imageWidth: "500px",
  rotateAmplitude: 20,
  scaleOnHover: 1.3,
  showMobileWarning: false,
  overlayContent: (
    <p className="headShot">bella's awesome headshot</p>
  )
}

const CARD_ONE = {
  imageSrc: Pic1,
  altText: "picture one",
  captionText: "picture one",
  containerHeight: "300px",
  containerWidth: "300px",
  imageHeight: "300px",
  imageWidth: "300px",
  rotateAmplitude: 20,
  scaleOnHover: 1.3,
  showMobileWarning: false,
  overlayContent: (
    <p className="pictureOne">Picture Uno</p>
  )
}

function About() {
return (
    <main className="content-overlay">
      <div className="aboutSplit">
        <TiltedCard className="headshot-photo" {...HEADSHOT}></TiltedCard>

        <Element className="about-text">
          <div class="text-div">
            <p style={{fontWeight: 'bold', fontSize: '24px'}}>About Me!</p>
            i'm batman.
          </div>

          
        </Element>
      </div>
    </main>
  );
}

export default About;