import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";
import { mockData } from "../../Tests/Data/testsData";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import checkRouteChanges from "../../Tests/Functions/checkRouteChanges";

describe("Card Component", () => {
  it("Deve verificar se o conteúdo está sendo mostrado", async () => {
    render(
      <BrowserRouter>
        <Card {...mockData[0]} />
      </BrowserRouter>
    );
    const name = screen.getByRole("heading", { name: mockData[0].name });
    const title = screen.getByText(mockData[0].title);
    const img = screen.getByRole('img', {name: `Foto de ${mockData[0].name}`})
    
    expect(name).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("Deve verificar se o card redireciona para a página do item", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Card {...mockData[0]} />} />
          <Route path="/item/:id" element={<h2>A rota mudou</h2>} />
        </Routes>
      </MemoryRouter>
    );

    const card = screen.getByTestId("card-individual");
    checkRouteChanges(card, "A rota mudou");
  });
});
