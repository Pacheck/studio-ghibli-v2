import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import LogoImg from '../../../assets/images/logo.png';
import { Container, Logo, List, ListItem, Wrapper } from './styles'

import { initialPath, especies, locais, personagens, veiculos } from './constants';

const listItems = [
  { path: initialPath, name: 'Filmes' }, 
  { path: personagens, name: 'Personagens' }, 
  { path: especies, name: 'Espécies' }, 
  { path: locais, name: 'Locais' }, 
  { path: veiculos, name: 'Veículos' }
];

export function Navbar() {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    switch(location.pathname){
      case personagens:
        setSelectedNavItem('Personagens');
        break;
      case veiculos:
        setSelectedNavItem('Veículos');
        break;
      case especies:
        setSelectedNavItem('Espécies');
        break;
      case locais:
        setSelectedNavItem('Locais');
        break;
      default:
        setSelectedNavItem('Filmes');
    }
  }, [location.pathname, selectedNavItem])

  return (
    <Container role='navbar' aria-label='navbar'>
      <Wrapper>
        <Logo src={LogoImg} alt="Ghibli studio" />
        <section>
          <List aria-label="nav-list">
            {
              listItems.map(({ path, name }) => (
                <ListItem key={name} aria-label="nav-item" currentPage={selectedNavItem === name}>
                  <Link to={path}>{name}</Link>
                </ListItem>
              ))
            }
          </List>
        </section>
      </Wrapper>
    </Container>
  )
}