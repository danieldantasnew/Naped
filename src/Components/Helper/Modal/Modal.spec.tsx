import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
  it("Deve verificar se ao passar a função e realizar o evento de click, ela será chamada", () => {
    const fakeFunction = vi.fn();
    render(<Modal func={fakeFunction} />);

    const modal = screen.getByTestId("modal");
    fireEvent.click(modal);
    expect(fakeFunction).toHaveBeenCalled();
  });
});