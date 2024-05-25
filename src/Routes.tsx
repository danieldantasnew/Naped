import { Route, Routes } from "react-router-dom";
import ItemPage from "./Pages/ItemPage/ItemPage";
import Series from "./Pages/Series/Series";
import Movies from "./Pages/Movies/Movies";
import Animes from "./Pages/Animes/Animes";
import Games from "./Pages/Games/Games";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/series" element={<Series />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/animes" element={<Animes />}></Route>
      <Route path="/games" element={<Games />}></Route>
      <Route path="/item/:id" element={<ItemPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default MainRoutes;
