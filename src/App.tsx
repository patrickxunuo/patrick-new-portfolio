import "./App.scss";
import Ball from "./components/Ball";
import Card from "./components/Card";

function App() {
  return (
    <div className="dome">
      <Card />
      <Ball layoutId="card-1" delay={1} dimension={100} />
      <Ball layoutId="card-2" delay={2} dimension={50} />
      <Ball layoutId="card-3" delay={3} dimension={80} />
      <Ball layoutId="card-4" delay={4} dimension={200} />
      <Ball layoutId="card-5" delay={5} dimension={100} />
      <Ball layoutId="card-6" delay={6} dimension={100} />
      <Ball layoutId="card-7" delay={7} dimension={100} />
    </div>
  );
}

export default App;
