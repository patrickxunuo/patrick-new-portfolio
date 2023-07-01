import "./App.scss";
import Ball from "./components/Ball";

function App() {
  return (
    <div className="dome">
      <h1>Vite + React</h1>
      <Ball dimension={100} />
      <Ball dimension={50} />
      <Ball dimension={80} />
      {/*<Ball dimension={200} />*/}
      {/*<Ball dimension={100} />*/}
      {/*<Ball dimension={100} />*/}
      {/*<Ball dimension={100} />*/}
    </div>
  );
}

export default App;
