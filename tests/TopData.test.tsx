/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import TopData from "../src/components/TopData";

jest.mock('react-apexcharts', () => (
    { __esModule: true, default: () => <div /> }
));

describe('Basic-area', () => {
    it('should render basic bar component', async() => {
        
        const views = [{
            count : 68,
            country : "Nigeria",
            percent : 34
        }];
        const dateTime = [{ count : 68,
            source : "google",
            percent : 34
        }]
        render(<TopData top_location={views} top_sources={dateTime} />);
        const todoElement = await screen.findByTestId('topdata-1');
        expect(todoElement).toBeInTheDocument();
    })
})