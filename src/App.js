import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <p className="link-source">
          <a
            href="https://github.com/HoncharenkoA/my-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span> by Anastasiia Honcharenko</span>
          and{" "}
          <a
            href="https://my-amazing-react-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
