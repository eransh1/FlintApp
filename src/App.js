import "./App.css";
import React from "react";
import{Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";


function App() {
  return (<>
  <Routes>
    <Route path="/FlintApp" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="*" element={<Error />}/>
  </Routes>
</>
  );
}

export default App;
