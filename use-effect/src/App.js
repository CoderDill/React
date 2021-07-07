import TimerWrapper from "./TimerWrapper";
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
      <TimerWrapper />
      <ProfileViewerWithSearch />
    </div>
  );
}

export default App;
