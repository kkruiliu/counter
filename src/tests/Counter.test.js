// import necessary react testing library helpers here
// import the Counter component here
import {fireEvent, getByTestId, render, screen, waitFor} from '@testing-library/react';
import Counter, {increment} from '../components/Counter';
import userEvent from "@testing-library/user-event"

beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);

})

test('renders counter message', () => {
    // Complete the unit test below based on the objective in the line above
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test ('should render initial count with value of 0', () => {
    const temp: string = screen.getByTestId('count').textContent;
    expect(temp).toEqual("0");

    // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count',  () => {
    const btn = screen.getByText('+');
    fireEvent.click(btn);
    const updateCount =  parseInt(screen.getByTestId('count').textContent,10);
    expect(updateCount).toBe(1);

    // const outer = function() {};
    // const inc = require('../components/Counter');
    // outer.call = jest.fn();
    // expect(outer.call).toHaveBeenCalledWith();

    // const inc = require('../components/Counter');
    // inc.Counter=jest.fn();
    // expect (inc.Counter).toHaveBeenCalled();
    // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
    const btn = screen.getByText('-');
    fireEvent.click(btn);
    const updateCount =  parseInt(screen.getByTestId('count').textContent,10);
    expect(updateCount).toBe(-1);
    // Complete the unit test below based on the objective in the line above
});
