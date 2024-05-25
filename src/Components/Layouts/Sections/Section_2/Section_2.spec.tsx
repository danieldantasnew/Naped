import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Section_2 from "./Section_2";
import { mockData } from "../../../../Tests/Data/testsData";

describe("Section_2 Component", () => {
  it("Deve testar se os cards detalhados estão aparecendo na tela com exceção dos 3 últimos objetos do array", () => {
    render(
      <BrowserRouter>
        <Section_2 data={mockData} />
      </BrowserRouter>
    );

    const cardsDetails = screen.getAllByTestId(/cardDetails-div/i);
    expect(cardsDetails).toHaveLength(mockData.length - 3);
  });

  it("Deve verificar se está sendo mostrado 3 cards", () => {
    render(
      <BrowserRouter>
        <Section_2 data={mockData} />
      </BrowserRouter>
    );

    const cards = screen.getAllByTestId(/card-div/i);
    expect(cards).toHaveLength(3);
  });
});
