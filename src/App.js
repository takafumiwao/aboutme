import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />}></Route>
        <Route path={`/register/`} element={<Register />}></Route>
        <Route path={`/login`} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
