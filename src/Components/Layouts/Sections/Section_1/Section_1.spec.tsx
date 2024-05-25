import { screen, render } from "@testing-library/react";
import Section_1 from "./Section_1";
import { BrowserRouter } from "react-router-dom";
import { mockData } from "../../../../Tests/Data/testsData";


describe("Section_1 Component", () => {

  it("Deve verificar se há uma exibição de titulo e descrição do site", () => {
  render(
    <BrowserRouter>
      <Section_1 data={mockData} />
    </BrowserRouter>
  );

    const title = screen.getByText(/Mundo nerd\? Naped!/i);
    const description = screen.getByText(/O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
  
  it("Deve verificar se há uma exibição de 3 cards na tela", () => {
    render(
      <BrowserRouter>
        <Section_1 data={mockData} />
      </BrowserRouter>
    );

    const cards = screen.getAllByTestId("card-div");
    expect(cards).toHaveLength(3);
  });

  it("Deve verificar se os detalhes dos 3 cards aparecem na tela", () => {
    render(
      <BrowserRouter>
        <Section_1 data={mockData} />
      </BrowserRouter>
    );

    mockData.slice(0,3).forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
