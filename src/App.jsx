import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Therapists from "./pages/Therapists";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={"/therapists/:city"} element={<Therapists />} />
        <Route path={"/therapists"} element={<Therapists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
