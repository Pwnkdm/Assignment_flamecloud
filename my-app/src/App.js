import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accordian from "./componants/Accordian";
import Homepage from "./componants/Homepage";
import NewPlan from "./Pages/NewPlan";
import NewPointer from "./Pages/NewPlan";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Accordian />
      <Routes>
        <Route path="home" element={<Homepage />}></Route>
        <Route path="newPlan" element={<NewPlan />}></Route>
        <Route path="point" element={<NewPointer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
