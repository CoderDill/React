const App = () => (
  <div>
    <RandNumRange min={22} max={58} />
    <Mascot name="Jackson DeVille" jerseyNum={<RandomNum />} />
    <RandomChoice choices={["teal", "black", "white"]} />
    <Jaguars />
    <JagsStadium />
    <Bouncer age={29} />
    <TodoList todos={["Walk Dog", "Clean Shower", "Wash Car"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
