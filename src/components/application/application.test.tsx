import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe('Application getByRole', () => {
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

describe('Application getByLabelText', () => {
    test('component renders correctly', () => {
        render(<Application />);
        const textElement = screen.getByLabelText("Name", {
            selector: "input" //input will be the tag and "Name" will be innner text of label
        });
        expect(textElement).toBeInTheDocument();
    })

    // test('component renders correctly', () => {
    //     render(<Application />);
    //     const textElement = screen.getByLabelText("Name123");
    //     expect(textElement).toBeInTheDocument();
    // })

    test('Wrapped Label Texts', () => {
        render(<Application />);
        const textElement = screen.getByLabelText("I agree to the terms and conditions");
        expect(textElement).toBeInTheDocument();
    })
});

describe('Application getByPlaceholderText', () => {
    test('Placeholder Texts in the input element', () => {
        render(<Application />);
        const textElement = screen.getByPlaceholderText("Fullname");//Full name will be the placeholder in input
        expect(textElement).toBeInTheDocument();
    })
});

describe('Application getByText', () => {
    test('Paragraph text is present', () => {
        render(<Application />);
        const paragraphElement = screen.getByText("All fields are manditory");//Full name will be the placeholder in input
        expect(paragraphElement).toBeInTheDocument();
    })
});

describe('Application getByDisplayValue', () => {
    test('Display text is present', () => {
        render(<Application />);
        const nameElement = screen.getByDisplayValue("Boodi");//Full name will be the placeholder in input
        expect(nameElement).toBeInTheDocument();
    })
});