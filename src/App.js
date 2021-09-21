import "./styles.css";

var headingText = "Welcome";
var color = "blue";
var userName = prompt("ENTER YOUR NAME");
export default function App() {
  return (
    <div className="App">
      <h1>
        <span style={{ backgroundColor: "blue" }}>{userName} </span>
        {headingText}
      </h1>
    </div>
  );
}
