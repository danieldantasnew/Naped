import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<div>teste</div>}></Route>
          <Route path="*" element={<div>non se</div>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
