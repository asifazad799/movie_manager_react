import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SamplePage from "./pages/SamplePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SamplePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
