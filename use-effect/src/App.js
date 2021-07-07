import Timer from "./Timer";
import Counter from "./Counter";
import ProfileViewer from "./ProfileViewer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProfileViewer name="Colt" color="blue" />
      <ProfileViewer name="Dillon" />
      <Counter />
      <Timer />
    </div>
  );
}

export default App;
