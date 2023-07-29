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

    test("render a login button", () => {
        render(<Skills skills={skills} />)
        const buttonElement = screen.getByRole('button', {
            name: 'Login'
        })
        expect(buttonElement).toBeInTheDocument()
    })

    test("Start Learning button not rendered", () => {
        render(<Skills skills={skills} />)
        const startLearningbutton = screen.queryByRole('button', {
            name: "Start learning"
        })
        expect(startLearningbutton).not.toBeInTheDocument()
    })

    test("Start Learning Button Eventually Displayed", async () => {
        render(<Skills skills={skills} />)
        const startLearningButton = await screen.findByRole(
            'button',
            {
                name: "Start learning"
            },
            {
                timeout: 7002   // timeout value should be less than 5000 in the jsx file
            }
        )
        expect(startLearningButton).toBeInTheDocument()
    })
})