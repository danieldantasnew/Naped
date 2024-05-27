import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("Deve verificar se há uma logo", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const logo = screen.getByTestId("logo-svg");
    expect(logo).toBeInTheDocument();
  });

  it("Deve verificar se há uma descrição", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const describe = screen.getByText(
      /Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários./i
    );
    expect(describe).toBeInTheDocument();
  });
});
