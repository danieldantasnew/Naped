import { fireEvent, screen } from "@testing-library/react";

export default function checkRouteChanges(item: HTMLElement, textToBeChecked: string) {
  fireEvent.click(item);
  expect(screen.getByText(textToBeChecked)).toBeInTheDocument();
  window.history.back();
}
