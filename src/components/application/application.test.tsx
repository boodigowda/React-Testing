import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe('Application', () => {
    test('component renders correctly', () => {
        render(<Application />);
        const textElement = screen.getByRole("textbox");
        expect(textElement).toBeInTheDocument();
    })

    test('select dropdown', () => {
        render(<Application />);
        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();
    })

    test('component renders correctly', () => {
        render(<Application />);
        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();
    })

    test('Submit button test', () => {
        render(<Application />);
        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();
    })
});



//https://testing-library.com/docs/queries/byrole