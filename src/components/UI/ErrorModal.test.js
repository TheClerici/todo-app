import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorModal from "./ErrorModal.js";

let status = "404"
let message = "Not Found"
let errorMsg = "Element is not available"

describe('UI component', () => {
    test('Check if Error Modal is rendered', () => {
        render(<ErrorModal
            error={message} 
            status={status} 
            message={errorMsg} 
            />
        )
    
        const errorElement = screen.getByText('Not Found', {exact: false});
        expect(errorElement).toBeInTheDocument;
    
        const statusElement = screen.getByText('404', {exact: false});
        expect(statusElement).toBeInTheDocument;
    
        const messageElement = screen.getByText('Element is not available', {exact: false});
        expect(messageElement).toBeInTheDocument;
    })
    
    test('Enter props.onClose when button is clicked', () => {
        const clickHandler = () => {
            console.log("Okay utton clicked")
        }
    
        render(<ErrorModal
            error={message} 
            status={status} 
            message={errorMsg}
            onClose={clickHandler}
            />
        )
    
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        expect(clickHandler).toBeCalled;
    })
})