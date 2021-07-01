import "./App.css";
import EightBall from "./EightBall";
import answersList from "./answersList";
import UserForm from "./UserForm";

function App() {
  return (
    <>
      <EightBall answersList={answersList} />
      <h2>Form Practice Below</h2>
      <UserForm />
    </>
  );
}

export default App;
