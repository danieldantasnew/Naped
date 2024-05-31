import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe('Button Component', () => {
  const message = 'Esse é um botão';
  it("Deve verificar se recebe uma label e ela é mostrada", () => {
    render(<Button label={message} />);
    expect(screen.getByRole('button', { name: message })).toBeInTheDocument();
  });

  it("Deve verificar se a flech apontada para esquerda é renderizada ao passar a propriedade Arrow como left", () => {
    render(<Button label={message} Arrow="left" />);
    const arrowLeft = screen.getByTestId('arrow-left');
    expect(arrowLeft).toBeInTheDocument();
  });
  
  it("Deve verificar se a flech apontada para direita é renderizada ao passar a propriedade Arrow como right", () => {
    render(<Button label={message} Arrow="right" />);
    const arrowRight = screen.getByTestId('arrow-right');
    expect(arrowRight).toBeInTheDocument();
  });
});