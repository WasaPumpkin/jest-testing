// // Counter.test.tsx
// // Counter.test.tsx
// // Counter.test.tsx
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Counter from './page';

// describe('Counter Component', () => {
//   it('increments count correctly', () => {
//     const { getByText } = render(<Counter />);
//     const incrementButton = getByText(/Increment/i);

//     // Simulate multiple clicks on the Increment button
//     fireEvent.click(incrementButton);
//     fireEvent.click(incrementButton);
//     fireEvent.click(incrementButton);

//     // The expected count after three clicks should be 3
//     expect(getByText(/3/i)).toBeInTheDocument();
//   });

//   it('does not exceed maximum count', () => {
//     const { getByText } = render(<Counter />);
//     const incrementButton = getByText(/Increment/i);

//     // Increment to the maximum count
//     for (let i = 0; i < 11; i++) {
//       fireEvent.click(incrementButton);
//     }

//     // Check that the count does not exceed MAX_COUNT (which is 10)
//     expect(getByText(/10/i)).toBeInTheDocument();
//   });

//   it('displays alert when maximum count is reached', () => {
//     const { getByText } = render(<Counter />);
//     const incrementButton = getByText(/Increment/i);

//     // Mock the alert function
//     window.alert = jest.fn();

//     // Increment to the maximum count
//     for (let i = 0; i < 11; i++) {
//       fireEvent.click(incrementButton);
//     }

//     // Check that alert was called when trying to exceed the maximum count
//     expect(window.alert).toHaveBeenCalledWith('Maximum count reached!');
//   });
// });
