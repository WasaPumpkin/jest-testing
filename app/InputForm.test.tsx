// InputForm.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import InputForm from './page';

describe('InputForm Component', () => {
  // Test 1: Check if there is a button called "Submit"
  it('renders a button with the text "Submit"', () => {
    render(<InputForm />);

    // Find the button by its text content
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Assert that the button is in the document
    expect(submitButton).toBeInTheDocument();
  });
  
  
});