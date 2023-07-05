/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import SideBar from "../src/components/SideBar";

describe('Sidebar', () => {
    it('should render Sidebar component', () => {
        render(<SideBar />);
        const todoElement = screen.getByTestId('sidebar-1');
        expect(todoElement).toBeInTheDocument();
    })

    it('should include acitve className to active element', async () => {
        render(<SideBar />);
        const linkElement = screen.getAllByRole('link')[0] as HTMLAnchorElement;
        expect(linkElement).toHaveClass('text-main-orange');
    });
    it('should does not include active className to in-active element', async () => {
        render(<SideBar />);
        const linkElement = screen.getAllByRole('link')[1] as HTMLAnchorElement;
        expect(linkElement).not.toHaveClass('text-main-orange');
    });
})