import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  screen.debug();
  expect(screen.getByText("Search:")).toBeInTheDocument();
  const elements = screen.getAllByText(/Search/);
  elements.forEach((element) => expect(element).toBeInTheDocument());

  const element = screen.getByRole("textbox");
});
