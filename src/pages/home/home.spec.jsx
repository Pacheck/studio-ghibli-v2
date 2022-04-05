import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Home } from '.';

describe('testing home page', () => { 
  test('should render Home Page', () => {
    render(<Home />);

    const HomePage = 'Home Page';
    const h2 = screen.getByRole('heading', { name: `${HomePage}`  });
    expect(h2).toHaveTextContent(HomePage);
  })
})