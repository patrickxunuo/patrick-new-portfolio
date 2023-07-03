import "./App.scss";
import Card from "./components/Card";
import { GitHub, Instagram, Facebook, Circle } from "react-feather";
import Balls from "./components/Balls";

function App() {
  return (
    <div className="dome">
      <Card />
      <Balls />
      <div className="home__navigation">
        <span className="patx">Pat X</span>
        <Circle color="#fff" />
        <div className="home__navigation__btn__wrap">
          <div className="home__navigation__btn">
            <GitHub size="14" color="hsla(210,18%,87%,1)" />
          </div>
        </div>
        <div className="home__navigation__btn__wrap">
          <div className="home__navigation__btn">
            <Instagram size="14" color="green" />
          </div>
        </div>
        <div className="home__navigation__btn__wrap">
          <div className="home__navigation__btn">
            <Facebook size="14" color="#1B74E4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
