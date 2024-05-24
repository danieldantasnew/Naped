import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../../../Pages/Home/Home";
import { DataContext } from "../../../Store/Context/DataContext";
import Series from "../../../Pages/Series/Series";
import Movies from "../../../Pages/Movies/Movies";
import Animes from "../../../Pages/Animes/Animes";
import Games from "../../../Pages/Games/Games";

describe("NavMenu Component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("Deve haver uma lista de opções de navegação com 5 elementos", () => {
    render(
      <BrowserRouter>
        <NavMenu />
      </BrowserRouter>
    );

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const items = screen.getAllByRole("listitem");

    expect(items).toHaveLength(5);

    const nav = ["Home", "Séries", "Filmes", "Animes", "Games"];

    nav.forEach((text) =>
      expect(
        screen.getByRole("link", { name: new RegExp(text, "i") })
      ).toBeInTheDocument()
    );
  });

  it("Deve verificar se o link 'Home' está indo para a página raiz /", async () => {
    render(
      <DataContext>
        <MemoryRouter initialEntries={["/animes"]}>
          <Routes>
            <Route path="*" element={<NavMenu />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </DataContext>
    );

    const btnHome = screen.getByRole("link", { name: /home/i });
    fireEvent.click(btnHome);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Mundo nerd\? Naped!/i, level: 1 })
      ).toBeInTheDocument();
    });
  });

  it("Deve verificar se o link 'Séries' está redicionando para a página /series", async () => {
    render(
      <DataContext>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="*" element={<NavMenu />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </MemoryRouter>
      </DataContext>
    );

    const btnSeries = screen.getByRole("link", { name: /s[eé]ries/i });
    fireEvent.click(btnSeries);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /s[eé]ries/i, level: 2 })
      ).toBeInTheDocument();
    });
  });

  it("Deve verificar se o link 'Filmes' está redirecionando para a página /filmes", async () => {
    render(
      <DataContext>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="*" element={<NavMenu />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </MemoryRouter>
      </DataContext>
    );

    const btnMovies = screen.getByRole("link", { name: /filmes/i });
    fireEvent.click(btnMovies);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /filmes/i, level: 2 })
      ).toBeInTheDocument();
    });
  });

  it("Deve verificar se o link 'Animes' está redirecionando para a página /animes", async () => {
    render(
      <DataContext>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="*" element={<NavMenu />} />
            <Route path="/animes" element={<Animes />} />
          </Routes>
        </MemoryRouter>
      </DataContext>
    );

    const btnAnimes = screen.getByRole("link", { name: /animes/i });
    fireEvent.click(btnAnimes);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /animes/i, level: 2 })
      ).toBeInTheDocument();
    });
  });

  it("Deve verificar se o link 'Games' está redirecionando para a página /games", async () => {
    render(
      <DataContext>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="*" element={<NavMenu />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </MemoryRouter>
      </DataContext>
    );

    const btnGames = screen.getByRole("link", { name: /games/i });
    fireEvent.click(btnGames);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /games/i, level: 2 })
      ).toBeInTheDocument();
    });
  });
});
