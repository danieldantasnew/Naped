import { render, screen, waitFor, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import { MockDataContextProvider, mockData } from "../../Tests/Data/testsData";

describe("Home Component", () => {
  it("Deve verificar se os dados estão por ordem de mais cliques na section_1", async () => {
    render(
      <MockDataContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </MockDataContextProvider>
    );

    await waitFor(() => {
      const section1 = screen.getByTestId("section_1");
      const allCards = within(section1).getAllByTestId("card-div");

      const cardsSorted = allCards.map((card) =>
        Number(card.getAttribute("data-testcard-id"))
      );
      const mockSorted = mockData
        .sort((itemA, itemB) => itemB.clicks - itemA.clicks)
        .slice(0, 3)
        .map((card) => card.id);

      expect(cardsSorted).toEqual(mockSorted);
    });
  });

  it("Deve verificar se os dados estão por ordem de mais cliques na section_2 sendo cardDetails sem os 3 últimos e os cards com esses 3 últimos que não estão dentro do cardDetails", async () => {
    render(
      <MockDataContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </MockDataContextProvider>
    );

    await waitFor(() => {
      //verifica dentro da section_2 os dados que estão na tela estão por ordem de cliques sem os 3 últimos
      const section2 = screen.getByTestId("section_2");
      const allCardsDetails =
        within(section2).getAllByTestId("cardDetails-div");

      const cardsDetailsSorted = allCardsDetails.map((card) =>
        Number(card.getAttribute("data-testcard-id"))
      );

      const mockSorted = mockData
        .sort((itemA, itemB) => itemB.clicks - itemA.clicks)
        .slice(0, -3)
        .map((card) => card.id);

      // Após ordenar por mais cliques e retirar os 3 últimos, verifica se o array de id de todos os dados é igual ao que está na tela
      expect(cardsDetailsSorted).toEqual(mockSorted);

      //Verifica se os 3 últimos itens que estão na tela (no leia também) são os 3 com menos cliques
      const lastThreeMockSorted = mockData
        .sort((itemA, itemB) => itemB.clicks - itemA.clicks)
        .slice(-3)
        .map((card) => card.id);

      const allCards = within(section2).getAllByTestId("card-div");
      const allCardsSorted = allCards.map((card) =>
        Number(card.getAttribute("data-testcard-id"))
      );

      expect(allCardsSorted).toEqual(lastThreeMockSorted);
    });
  });
});
