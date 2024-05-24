import { render, screen } from '@testing-library/react';
import Account from './Account';

describe("Account Component", () => {
  it("Deve haver um botão com o nome minha conta", () => {
    render(<Account />);
    expect(screen.getByRole('button')).toHaveTextContent(/minha conta/i);
  });
});