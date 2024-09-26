import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Dashboard1 from "./components/Main/Dashboard1";
import Diet from "./components/Main/Diet";
import Feedback from "./components/Main/Feedback";
import Attendance from "./components/Main/Attendance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/dashboard1" element={<Dashboard1 />}/>
        <Route path="/diet" element={<Diet />}/>
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/attendance" element={<Attendance />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
