/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
// import { jest, describe, expect } from '@jest/globals';
import BasicArea from "../src/components/BasicArea";

jest.mock('react-apexcharts', () => (
    { __esModule: true, default: () => <div /> }
));

describe('Basic-area', () => {
    it('should render basic bar component', async() => {
        
        const views = [10, 30, 45, 66, 100];
        const dateTime = ["10/02/2023", "10/02/2023", "10/02/2023", "10/02/2023", "10/02/2023" ]
        render(<BasicArea views={views} dateTime={dateTime} />);
        const todoElement = await screen.findByTestId('area-1');
        expect(todoElement).toBeInTheDocument();
    })
})