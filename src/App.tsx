import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import {DataContext} from "./Context/DataContext";

function App() {
  return (
    <BrowserRouter>
      <DataContext>
        <section className="contentBody">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<div>non se</div>}></Route>
            </Routes>
          </main>
          <Footer />
        </section>
      </DataContext>
    </BrowserRouter>
  );
}

export default App;
