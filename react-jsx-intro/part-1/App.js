const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Matt" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
