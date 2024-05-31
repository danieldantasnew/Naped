import { render, screen } from "@testing-library/react";
import H2 from "./H2";

describe("H2 Component", () => {
  it("Deve verificar se está sendo passado uma label para um h2 e se ela está sendo mostrada", () => {
    const label = 'Esta é uma label';
    render(<H2 label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});