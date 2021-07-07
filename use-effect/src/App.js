import Timer from "./Timer";
import Counter from "./Counter";
import ProfileViewer from "./ProfileViewer";
import ProfileViewerWithSearch from "./ProfileViewerWithSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProfileViewer name="Colt" color="blue" />
      <ProfileViewer name="Dillon" />
      <Counter />
      <Timer />
      <ProfileViewerWithSearch />
    </div>
  );
}

export default App;
