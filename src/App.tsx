import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Country from "./components/Country/Country";

const App = () => {
  let theme: string = "light";

  return (
    <div className="app" data-theme={theme}>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/country" element={<Country />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
