import { render, screen } from '@testing-library/react'
import Stats from './Stats'

describe('Stats component', () => {
    test('Check if stats component is rendered', () => {
        const dummyItems = [ 20, 0, 10, 0, 30, 0, 20, 0 ];
        //Arrange
        render(<Stats 
        items={dummyItems}/>);

        //Assert
        const averageElement = screen.getByText('Average time to finish All tasks:', {exact: false});
        expect(averageElement).toBeInTheDocument();

        const lowElement = screen.getByText('Avg Low priority:', {exact: false});
        expect(lowElement).toBeInTheDocument();

        const medElement = screen.getByText('Avg Medium priority:', {exact: false});
        expect(medElement).toBeInTheDocument();

        const highElement = screen.getByText('Avg High priority:', {exact: false});
        expect(highElement).toBeInTheDocument();

        const dummyAll = screen.getByText('20 Minutes and 0 Seconds', {exact: false});
        expect(dummyAll).toBeInTheDocument();

        const dummyLow = screen.getByText('10 Min and 0 Sec', {exact: false});
        expect(dummyLow).toBeInTheDocument();

        const dummyMed = screen.getByText('30 Min and 0 Sec', {exact: false});
        expect(dummyMed).toBeInTheDocument();

        const dummyHigh = screen.getByText('20 Min and 0 Sec', {exact: false});
        expect(dummyHigh).toBeInTheDocument();
    })
})