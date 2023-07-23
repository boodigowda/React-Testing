import { render, screen } from "@testing-library/react";
import Greet from "./Greet"

test('Greet Renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})

test('Green renders with a name', () => {
    render(<Greet name="Boodi" />);
    const textElement = screen.getByText("Hello Boodi");
    expect(textElement).toBeInTheDocument();

})