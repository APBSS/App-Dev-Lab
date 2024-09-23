import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Dashboard1 from "./components/Main/Dashboard1";
import Diet from "./components/Main/Diet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard1" element={<Dashboard1 />}/>
        <Route path="/diet" element={<Diet />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
