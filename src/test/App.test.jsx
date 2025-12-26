import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders the kudos board', () => {
    render(<App />);
    expect(screen.getByText('Kudos Board')).toBeInTheDocument();
  });
});
