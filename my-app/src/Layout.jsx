import './App.css';
import Squares from './components/Squares';

const SQUARE_PROPS = {
  speed: 0.5,
  squareSize: 40,
  direction: 'diagonal',
  boarderColor: '#ffffff',
  hoverFillColor: '#A584D1',
    direction: "diagonal",
    borderColor: "ffffff",
    hoverColor: "A584D1",
    size: 40
}

const Layout = ({ children }) => {
  return (
    <div className="liquid-ether-container">
      <div className="bg-wrapper">
        <Squares
        {...SQUARE_PROPS}/>
      </div>
      {children}
    </div>
  );
}

export default Layout;
