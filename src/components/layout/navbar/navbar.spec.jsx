import { render, screen, within } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';

import Logo from '../../../assets/images/logo.png';

import { Navbar } from '.'

function createImage() {
  const img = document.createElement('img');
  img.setAttribute('src', Logo);
  return img;
}

describe('rendering navbar', () => {
  test('should render logo', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const logoImg = screen.getByRole('img', { name: /ghibli studio/i });

    expect(logoImg).toBeInTheDocument();
  });

  test('should image logo contains same src', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const assetLogo = createImage();
    const logoImg = screen.getByRole('img', { name: /ghibli studio/i });

    expect(logoImg).toHaveAttribute('src', assetLogo.getAttribute('src'));
  });

  test('should navbar contain a blue background color', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const nav = screen.getByRole('navbar', { name: /navbar/i });

    expect(nav).toHaveStyle('background-color: #80bdf0');
  });

  test('should navbar contains 5 items and render ordered by render priority', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const list = screen.getByRole('list', { name: /nav-list/i });
    const { getAllByRole } = within(list);
    const itemList = getAllByRole('listitem', { name: /nav-item/i });
  
    const linkNames = itemList.map(link => link.textContent);

    expect(itemList.length).toBe(5);
    expect(linkNames).toEqual([
      "Filmes",
      "Personagens",
      "Espécies",
      "Locais",
      "Veículos"
    ])
  });
})