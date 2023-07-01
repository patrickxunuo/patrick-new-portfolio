import "./App.scss";
import Ball from "./components/Ball";
import Card from "./components/Card";

function App() {
  return (
    <div className="dome">
      <Card />
      <Ball key="card-1" layoutId="card-1" delay={1} dimension={100} />
      <Ball key="card-2" layoutId="card-2" delay={2} dimension={50} />
      <Ball key="card-3" layoutId="card-3" delay={3} dimension={80} />
      <Ball key="card-4" layoutId="card-4" delay={4} dimension={200} />
      <Ball key="card-5" layoutId="card-5" delay={5} dimension={100} />
      <Ball key="card-6" layoutId="card-6" delay={6} dimension={100} />
      <Ball key="card-7" layoutId="card-7" delay={7} dimension={100} />
    </div>
  );
}

export default App;
