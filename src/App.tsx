import Navbar from "./assets/components/Navbar/Navbar";

const App = () => {
  let theme: string = "dark";

  return (
    <div className="app" data-theme={theme}>
      <Navbar />
    </div>
  );
};

export default App;
