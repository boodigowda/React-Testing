import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe('Application', () => {
    test('component renders correctly', () => {
        render(<Application />);
        const textElement = screen.getByRole("textbox", {
            name: 'Name'
        });
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

    test('Bio Text field test', () => {
        render(<Application />);
        const bioElement = screen.getByRole("textbox", {
            name: "Bio" //Inner text of the Element
        });
        expect(bioElement).toBeInTheDocument();
    })

    test('Page Heading', () => {
        render(<Application />);
        const pageHeading1 = screen.getByRole("heading", {
            level: 1 //level 1 means h1
        });
        expect(pageHeading1).toBeInTheDocument();

        const pageHeading2 = screen.getByRole("heading", {
            name: "Section 1" // add innertext also
        });
        expect(pageHeading2).toBeInTheDocument();
    })

});



//https://testing-library.com/docs/queries/byrole