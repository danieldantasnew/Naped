import { render, screen, act } from "@testing-library/react";
import Cover from "./Cover";
import { mockData } from "../../Tests/Data/testsData";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
  })),
});

describe("Cover Component", () => {
  const desc = "Tudo sobre animes";
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it("Deve verificar se o titulo, descrição e imagem estão aparecendo na tela", () => {
    render(
      <Cover
        title="Animes"
        description={desc}
        image={mockData}
        slideStart={0}
        slideEnd={1}
      />
    );

    const title = screen.getByRole("heading", { name: /animes/i, level: 2 });

    const description = screen.getByText(desc);

    const img = screen.getByRole("img", { name: /capa da categoria animes/i });

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("Deve verificar se a animação é adicionada", () => {
    render(
      <Cover
        title="Animes"
        description={desc}
        image={mockData}
        slideStart={0}
        slideEnd={1}
      />
    );
    const divCover = screen.getByTestId("cover-div");
    expect(divCover).toHaveClass(/animationdelay/i);
  });

  it("Deve verificar se a animação é removida após 8 segundos", () => {
    render(
      <Cover
        title="Animes"
        description={desc}
        image={mockData}
        slideStart={0}
        slideEnd={1}
      />
    );
    const divCover = screen.getByTestId("cover-div");
    act(() => vi.advanceTimersByTime(8000));

    expect(divCover).not.toHaveClass(/animationdelay/i);
  });

  it("Deve verificar se vai para a próxima imagem", () => {
    render(
      <Cover
        title="Animes"
        description={desc}
        image={mockData}
        slideStart={0}
        slideEnd={2}
      />
    );
    let img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "pathimgcustom1.jpg");
    act(() => vi.advanceTimersByTime(8000));

    img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "pathimgcustom2.jpg");
  });
});
