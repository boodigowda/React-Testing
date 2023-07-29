import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
    const skills = ['Html', 'Css', "Javascript"]
    test("renders currectly", () => {
        render(<Skills skills={skills} />);

        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test("render a list of skills in length", () => {
        render(<Skills skills={skills} />)
        const listItemElement = screen.getAllByRole('listitem')
        expect(listItemElement).toHaveLength(skills.length)
    })
})