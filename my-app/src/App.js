import "./App.css";
import "./component10/style.css";
import logo from "./component10/star_purple500_24px.svg"
import anya from './component10/anya.jpeg'

const App = () => {
  return (
    <div className="App">
      <div className="left">
        <div className="top-left">
          <img
            src={logo}
          />
          <img
            src={logo}
          />
          <img
            src={logo}
          />
          <img
            src={logo}
          />
          <img
            src={logo}
          />
        </div>
        <p className="mid-left">
          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </p>
        <div className="bot-left">
          <img className="img-h" src={anya}/>
          <p className="name">Anya Forger</p>
        </div>
      </div>
    </div>
  );
};

export default App;
