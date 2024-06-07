import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NavigateBetweenPages from "./NavigateBetweenPages";

window.scrollTo = vi.fn(() => {});

describe("NavigateBetweenPages Component", () => {
  const Wrapper = () => {
    const [page, setPage] = React.useState(1);
    const mockPages = {
      firstPage: 1,
      lastPage: 4,
      totalPages: 4,
      page,
      setPage,
    };
    return <NavigateBetweenPages {...mockPages} />;
  };

  it("Deve verificar se está sendo mostrada 6 itens de uma lista sendo 2 Arrows e 4 items de páginas", () => {
    render(<Wrapper />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(6);
  });

  it("Deve verificar se está sendo mostrada a quantidade de páginas corretamente", () => {
    render(<Wrapper />);
    const listItems = screen.getAllByTestId("itemPage");
    expect(listItems).toHaveLength(4);
  });

  it("Deve verificar se está sendo mudado o estado da página ao clicar em uma das páginas (seja anterior ou próxima)", () => {
    render(<Wrapper />);
    const buttonPage = screen.getByText("2");
    fireEvent.click(buttonPage);
    expect(buttonPage).toHaveAttribute("data-testitempage", "active");
  });

  it("Deve verificar se as setas estão sendo mostradas adequadamente (com indicação de que há uma próxima página ou não)", () => {
    render(<Wrapper />);
    const notHavePrev = screen.getByTestId("arrow");
    expect(notHavePrev).toBeInTheDocument();

    let buttonPage = screen.getByText("2");
    fireEvent.click(buttonPage);

    const havePrevNext = screen.getAllByTestId("arrowActive");
    expect(havePrevNext).toHaveLength(2);

    buttonPage = screen.getByText("4");
    fireEvent.click(buttonPage);

    const notHaveNext = screen.getByTestId("arrow");
    expect(notHaveNext).toBeInTheDocument();
  });
});
