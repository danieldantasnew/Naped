import { render, screen } from "@testing-library/react";
import ErrorComponent from "./ErrorComponent";

describe("ErroComponent", () => {
  it("Deve verificar se está sendo exibido a mensagem que é passada como prop", () => {
    const errorMessage = 'Essa é uma mensagem de teste';
    render(<ErrorComponent message={errorMessage} />);
    const message = screen.getByText(errorMessage);
    expect(message).toBeInTheDocument();
  });
});