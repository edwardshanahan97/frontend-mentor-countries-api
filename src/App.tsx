const App = () => {
  let theme: string = "light";

  return (
    <div className="app" data-theme={theme}>
      <h1>REST Countries API</h1>
    </div>
  );
};

export default App;
