import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "../App";

test("renders App component successfully", () => {
    render(<App />);
    expect(screen.getAllByText(/bullshido./i)[0]).toBeInTheDocument();
});
