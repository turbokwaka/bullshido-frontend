import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders App component successfully", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>,
    );

    expect(screen.getAllByText(/bullshido./i)[0]).toBeInTheDocument();
});
