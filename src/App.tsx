import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import {DataContext} from "./Store/Context/DataContext";
import MainRoutes from "./Routes";


function App() {
  return (
    <BrowserRouter>
      <DataContext>
        <section className="contentBody">
          <Header />
          <main>
            <MainRoutes/>
          </main>
          <Footer />
        </section>
      </DataContext>
    </BrowserRouter>
  );
}

export default App;
