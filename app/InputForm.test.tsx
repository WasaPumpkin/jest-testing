// InputForm.test.tsx
// app/InputForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputForm from './page';

describe('InputForm Component', () => {
  it('renders the input field and submit button', () => {
    render(<InputForm />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('submits the input value when provided', () => {
    render(<InputForm />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: 'Hello World' } });
    fireEvent.click(button);
    expect(screen.getByText(/Submitted Value: Hello World/i)).toBeInTheDocument();
  });

  it('does not submit empty input', () => {
    render(<InputForm />);
    const button = screen.getByRole('button', { name: /submit/i });
    
    fireEvent.click(button);
    expect(screen.queryByText(/Submitted Value:/i)).not.toBeInTheDocument();
  });

  it('does not submit whitespace-only input', () => {
    render(<InputForm />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);
    expect(screen.queryByText(/Submitted Value:/i)).not.toBeInTheDocument();
  });

  it('has the input field marked as required for accessibility', () => {
    render(<InputForm />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('aria-required', 'true'); // Add this if you're using aria attributes
  });
});

