import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../holistic/App";

beforeEach(() => {
  fetch.resetMocks();
});

test("renders learn react link", () => {
  fetch.mockResponseOnce(JSON.stringify({ message: "Hello, world!" }));

  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(fetch).toHaveBeenCalledTimes(1);
});

test("renders hello world", async () => {
  fetch.mockResponseOnce(JSON.stringify({ message: "Hello, world!" }));

  render(<App />);

  const linkElement = await screen.findByText(/API response/);
  expect(linkElement.textContent).toEqual("API response: Hello, world!");
  expect(fetch).toHaveBeenCalledTimes(1);
});
