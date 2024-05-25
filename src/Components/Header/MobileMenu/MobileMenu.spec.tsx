import { fireEvent, render, screen } from "@testing-library/react";
import MobileMenu from "./MobileMenu";
import { BrowserRouter } from "react-router-dom";

describe("MobileMenu Component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("Deve haver botão para o menu mobile", () => {
    render(
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>
    );

    const btnMenu = screen.getByLabelText(/open-menu-mobile/i);
    expect(btnMenu).toBeInTheDocument();
  });

  it("Deve verficar se o menu mobile é aberto após o clique no botão menu", () => {
    render(
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>
    );

    const btnMenu = screen.getByLabelText(/open-menu-mobile/i);
    expect(btnMenu).toBeInTheDocument();
    fireEvent.click(btnMenu);

    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(5);
  });

  it("Deve verificar se o menu mobile tem opção de ser fechado", () => {
    render(
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>
    );

    const btnMenu = screen.getByLabelText(/open-menu-mobile/i);
    expect(btnMenu).toBeInTheDocument();
    fireEvent.click(btnMenu);
    const btnClose = screen.getByLabelText(/Close-Menu-Mobile/i);
    expect(btnClose).toBeInTheDocument();
  });
});
