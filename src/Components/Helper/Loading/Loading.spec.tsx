import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading Component", () => {
  it("Deve verificar se o Loading está renderizando sem quebrar", () => {
    const { container } = render(<Loading />);
    expect(container).toBeInTheDocument()
  });

  it("Deve verificar se está sendo renderizada com a classe Loading", () => {
    render(<Loading />);
    const loading = screen.getByTestId("loading");
    expect(loading).toHaveClass(/Loading/i);
  });
});