import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
  it("Deve verificar se o placeholder está sendo mostrada corretamente", () => {
    const placeholderMessage = 'Quer ajuda na procura? Pesquise aqui';
    render(<Search />);
    const placeholder = screen.getByPlaceholderText(placeholderMessage);
    expect(placeholder).toBeInTheDocument();
  });

  it("Deve verificar se estilo da div que envolve o input está sendo passado corretamente", () => {
    const { container } = render(<Search />);
    const div = container.querySelector('div');
    expect(div).toHaveClass(/divInputStyle/i);
  });

    it("Deve verificar se estilo do input está sendo passado corretamente", () => {
      render(<Search />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass(/Search/i);
  });
});