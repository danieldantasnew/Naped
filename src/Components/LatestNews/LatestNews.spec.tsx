import { render, screen, waitFor, within } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import LatestNews from "./LatestNews";
import { mockData } from "../../Tests/Data/testsData";
import checkRouteChanges from "../../Tests/Functions/checkRouteChanges";
import { Naped } from "../../Types/types";
import StringToDate from "../../Functions/StringToDate/StringToDate";

function sortByRecents(dataCome: Naped[]) {
  const dataConvert = dataCome.sort((itemA, itemB) => {
    const dateA = StringToDate(itemA.date)?.getTime();
    const dateB = StringToDate(itemB.date)?.getTime();
    if (!dateA || !dateB) return 0;
    return dateB - dateA;
  });
  return dataConvert;
}

describe("Component Latest News", () => {
  it("Deve verificar se há um título na tela", async () => {
    render(
      <BrowserRouter>
        <LatestNews data={mockData} />
      </BrowserRouter>
    );

    const title = await screen.findByRole("heading", {
      name: /notícias mais recentes/i,
      level: 2,
    });

    await waitFor(() => expect(title).toBeInTheDocument());
  });

  it("Deve verificar se há 6 cards na tela", async () => {
    render(
      <BrowserRouter>
        <LatestNews data={mockData} />
      </BrowserRouter>
    );

    const cards = screen.getAllByTestId("card-div");
    expect(cards).toHaveLength(6);
  });

  it("Deve verificar se está sendo retornado 6 cards mais recentes", () => {
    render(
      <BrowserRouter>
        <LatestNews data={mockData} />
      </BrowserRouter>
    );

    const latest = sortByRecents(mockData).slice(0, 6);
    const cards = screen.getAllByTestId("card-div");

    const cardIds = cards.map((card) =>
      Number(card.getAttribute("data-testcard-id"))
    );
    const latestIds = latest.map((item) => item.id);

    expect(cardIds).toEqual(latestIds);
  });

  it("Deve verificar se o conteúdo do card está sendo exibido", async () => {
    render(
      <BrowserRouter>
        <LatestNews data={mockData} />
      </BrowserRouter>
    );

    const cards = screen.getAllByTestId("card-div");
    const latest = sortByRecents(mockData).slice(0, 6);

    cards.forEach((card, index) => {
      const title = within(card).getByText(latest[index].title);
      const name = within(card).getByText(latest[index].name);

      expect(title).toBeInTheDocument();
      expect(name).toBeInTheDocument();
    });
  });

  it("Deve verificar se os 6 cards na tela redirecionam para rota item", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<LatestNews data={mockData} />} />
          <Route path="/item/:id" element={<h2>mudou a rota</h2>} />
        </Routes>
      </MemoryRouter>
    );

    const cards = screen.getAllByTestId("card-div");
    cards.forEach((card) => checkRouteChanges(card, "mudou a rota"));
  });
});
