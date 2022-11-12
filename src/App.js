import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p className="link-source">
          <a
            href="https://github.com/HoncharenkoA/my-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span> by Anastasiia Honcharenko</span>
        </p>
      </div>
    </div>
  );
}

export default App;
