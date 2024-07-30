import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

test('should render contact us component', () => { 
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test('should render contact us component', () => { 
    render(<Contact />);
    const heading = screen.getByPlaceholderText("Your Name");

    expect(heading).toBeInTheDocument();
});
