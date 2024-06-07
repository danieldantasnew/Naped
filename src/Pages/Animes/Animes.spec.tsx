import { fireEvent, render, screen, within } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import Animes from "./Animes";
import { MockDataContextProvider } from "../../Tests/Data/testsData";
import checkRouteChanges from "../../Tests/Functions/checkRouteChanges";

vi.mock("../../Hooks/useMobile");
window.scrollTo = () => vi.fn;

describe("Anime Component", () => {
  it("Deve verificar se existe uma capa com imagem, título e descrição estão na tela", () => {
    render(
      <MockDataContextProvider>
        <BrowserRouter>
          <Animes />
        </BrowserRouter>
      </MockDataContextProvider>
    );

    const title = screen.getByRole("heading", { name: /animes/i });
    const description = screen.getByText(
      /o naped pode ser sua fonte de informações sobre Animes e outros assuntos relacionados./i
    );
    const img = screen.getByRole("img", { name: /capa da categoria animes/i });

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("Deve verificar se há uma barra de pesquisa", () => {
    render(
      <MockDataContextProvider>
        <BrowserRouter>
          <Animes />
        </BrowserRouter>
      </MockDataContextProvider>
    );

    const inputSearch = screen.getByTestId("input");
    expect(inputSearch).toBeInTheDocument();
  });

  it("Deve verificar se há 3 cards na tela", () => {
    //no mockData existem 3 itens com a categoria de animes, que deverá ser mostrado na tela apenas os itens com esta categoria
    render(
      <MockDataContextProvider>
        <BrowserRouter>
          <Animes />
        </BrowserRouter>
      </MockDataContextProvider>
    );

    const cards = screen.getAllByTestId("card-individual");
    expect(cards).toHaveLength(3);
  });

  it("Deve verificar se há uma navegação com uma página", () => {
    //Como são apenas 3 itens a navegação deve ter apenas uma página
    render(
      <MockDataContextProvider>
        <BrowserRouter>
          <Animes />
        </BrowserRouter>
      </MockDataContextProvider>
    );

    const listNavigation = screen.getAllByTestId("itemPage");
    expect(listNavigation).toHaveLength(1);
  });

  it("Deve verificar se é possível buscar um card específico", () => {
    render(
      <MockDataContextProvider>
        <BrowserRouter>
          <Animes />
        </BrowserRouter>
      </MockDataContextProvider>
    );

    const searchInput = screen.getByTestId("input");
    fireEvent.change(searchInput, { target: { value: "Name 2" } });
    const card = screen.getByTestId("card-individual");
    const nameCard = within(card).getByRole("heading", { name: "Name 2" });
    expect(nameCard).toBeInTheDocument();
  });

  it("Deve verificar se ao não encontrar um card é mostrado uma mensagem de nenhum resultado encontrado", () => {
    render(
      <MockDataContextProvider>
        <BrowserRouter>
          <Animes />
        </BrowserRouter>
      </MockDataContextProvider>
    );

    const searchInput = screen.getByTestId("input");
    fireEvent.change(searchInput, { target: { value: "Random" } });
    const notFoundItem = screen.getByText(/nenhum resultado encontrado/i);
    expect(notFoundItem).toBeInTheDocument();
  });

  it("Deve verificar ao clicar no card a rota muda", () => {
    render(
      <MockDataContextProvider>
        <MemoryRouter initialEntries={["/animes"]}>
          <Routes>
            <Route path="/animes" element={<Animes />} />
            <Route path="/item/:id" element={<p>A rota mudou</p>} />
          </Routes>
        </MemoryRouter>
      </MockDataContextProvider>
    );

    const cards = screen.getAllByTestId("card-individual");

    cards.forEach((card) => checkRouteChanges(card, "A rota mudou"));
  });
});
