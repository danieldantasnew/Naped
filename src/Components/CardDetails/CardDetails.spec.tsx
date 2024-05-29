import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./CardDetails";
import { render, screen } from "@testing-library/react";
import { mockData } from "../../Tests/Data/testsData";
import checkRouteChanges from "../../Tests/Functions/checkRouteChanges";

describe("CardDetails Component", () => {
  it("Deve verificar se o conteúdo está aparencendo na tela", () => {
    render(
      <BrowserRouter>
        <CardDetails {...mockData[0]} />
      </BrowserRouter>
    );

    const name = screen.getByRole('heading', { name: mockData[0].name });
    const image = screen.getByRole('img', { name: `Foto de ${mockData[0].name}` });
    const title = screen.getByRole('heading', { name: mockData[0].title });
    const previous = screen.getByText(mockData[0].previous);
    const date = screen.getByText(/\d{2}\/\d{2}\/\d{4}/);
    const button = screen.getByRole('button', { name: /ler notícia/i });

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(previous).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Deve verificar se ao clicar no botão a página é redirecionada para a página do item", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<CardDetails {...mockData[0]} />}/>
          <Route path="/item/:id" element={<h2>A rota mudou</h2>}/>
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /ler notícia/i });
    checkRouteChanges(button, 'A rota mudou');
  });
});