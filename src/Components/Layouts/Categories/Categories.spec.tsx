import { render, screen } from "@testing-library/react";
import Categories from "./Categories";
import { mockData } from "../../../Tests/Data/testsData";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe("Categories Component", () => {
  it("Deve verificar se é mostrado os itens na tela", () => {
    render(<Categories newData={mockData} />);
    const cards = screen.getAllByTestId("card-individual");
    expect(cards).toHaveLength(10);
  });
  it("Deve verificar se retorna um parágrafo com a mensagem de nada encontrado em caso de não haver itens", () => {
    render(<Categories newData={[]} />);
    const paragraph = screen.getByText("Nenhum resultado encontrado ;(");
    expect(paragraph).toBeInTheDocument();
  });
});
