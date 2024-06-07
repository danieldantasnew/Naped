import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import { DataContext } from "../../Store/Context/DataContext";
import useMobile from "../../Hooks/useMobile";

vi.mock("../../Hooks/useMobile");

describe("Header Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Deve verificar se há uma logo que redireciona para o home", async () => {
    render(
      <DataContext>
        <MemoryRouter initialEntries={["/games"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Header />} />
          </Routes>
        </MemoryRouter>
      </DataContext>
    );

    const logo = screen.getByLabelText(/logo/i);
    fireEvent.click(logo);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Mundo nerd\? Naped!/i, level: 1 })
      );
    });
  });

  it("Deve exibir o botão do menu quando o match media for true", () => {
    vi.mocked(useMobile).mockReturnValue(true);
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const btnMenu = screen.getByLabelText(/open-menu-mobile/i);
    expect(btnMenu).toBeInTheDocument();
  });

  it("Deve exibir cinco links quando o match media for false", () => {
    vi.mocked(useMobile).mockReturnValue(false);
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(5);
  });
});
