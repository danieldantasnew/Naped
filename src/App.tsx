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
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
