import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Home } from "./components/Home/Home";
import { LevelOne } from "./components/Home/LevelOne";
import { Index } from "./components/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Index />} />
            <Route path="/random" element={<LevelOne />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
