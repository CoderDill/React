const App = () => (
  <div>
    <Person
      name="John Smith"
      age="17"
      hobbies={["surfing", "rowing", "bowling"]}
    />
    <Person name="Max" age="18" hobbies={["birding", "rowing", "napping"]} />
    <Person name="Linda" age="24" hobbies={["surfing", "rowing", "baseball"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
