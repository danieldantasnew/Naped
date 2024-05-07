import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import {DataContext} from "./Store/Context/DataContext";
import ItemPage from "./Pages/ItemPage/ItemPage";
import Series from "./Pages/Series/Series";
import Movies from "./Pages/Movies/Movies";
import Animes from "./Pages/Animes/Animes";
import Games from "./Pages/Games/Games";

function App() {
  return (
    <BrowserRouter>
      <DataContext>
        <section className="contentBody">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/series" element={<Series/>}></Route>
              <Route path="/movies" element={<Movies/>}></Route>
              <Route path="/animes" element={<Animes/>}></Route>
              <Route path="/games" element={<Games/>}></Route>
              <Route path="/item/:id" element={<ItemPage/>}></Route>
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
