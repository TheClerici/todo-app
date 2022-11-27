import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination'

describe('Pagination component', () => {
    test('Check if Pagination is rendered with more than 1 page', () => {
        const nPages = 5;
        //Arrange
        render(<Pagination 
        totalPages={nPages}/>);

        //Assert
        const currentPageElement = screen.getByText('1', {exact: false});
        expect(currentPageElement).toBeInTheDocument();

        const nextPageElement = screen.getByText('...2', {exact: false});
        expect(nextPageElement).toBeInTheDocument();
    })

    test('Enter props.onPageChange when button is clicked', () => {
        const nPages = 5;
        const clickHandler = () => {
            console.log("Next Page Button clicked")
        }
    
        render(<Pagination
            totalPages={nPages}
            onPageChange={clickHandler}
            />
        )
    
        const buttonElement = screen.getAllByRole('button');
        userEvent.click(buttonElement[1]);
    
        expect(clickHandler).toBeCalled;
    })
})
