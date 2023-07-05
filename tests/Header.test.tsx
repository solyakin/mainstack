/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

describe('Header', () => {
    it('should render Header component', () => {
        render(<Header />);
        const todoElement = screen.getByTestId('header');
        expect(todoElement).toBeInTheDocument();
    })
})