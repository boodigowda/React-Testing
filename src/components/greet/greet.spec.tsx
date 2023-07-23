import { render, screen } from "@testing-library/react";
import Greet from "./Greet"



describe('GREET', () => {
    it('Renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    })

    describe('NESTED', () => {
        it('renders with a name', () => {
            render(<Greet name="Boodi" />);
            const textElement = screen.getByText("Hello Boodi");
            expect(textElement).toBeInTheDocument();

        })
    })
})

describe('NESTED', () => {
    it('renders with a name', () => {
        render(<Greet name="Boodi" />);
        const textElement = screen.getByText("Hello Boodi");
        expect(textElement).toBeInTheDocument();

    })
})