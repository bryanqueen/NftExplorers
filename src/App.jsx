
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Explore from "./Pages/Explore";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
    </>
  )
}

export default App
