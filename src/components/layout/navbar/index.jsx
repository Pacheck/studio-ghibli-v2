import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import LogoImg from '../../../assets/images/logo.png';
import MenuLogo from '../../../assets/images/burger.svg';
import CloseMenu from '../../../assets/images/close.png';

import {
  Container,
  Logo,
  List,
  ListItem,
  Wrapper,
  BurgerLogo,
  HiddenMenuContainer,
  HiddenMenuList,
  HiddenMenuItem,
} from './styles';
import {
  initialPath,
  especies,
  locais,
  personagens,
  veiculos,
} from './constants';

const listItems = [
  { path: initialPath, name: 'Filmes' },
  { path: personagens, name: 'Personagens' },
  { path: especies, name: 'Espécies' },
  { path: locais, name: 'Locais' },
  { path: veiculos, name: 'Veículos' },
];

export function Navbar() {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const location = useLocation();

  const handleToggleActiveMenu = () => setIsMenuActive((prev) => !prev);

  const handleRenderMenuIcon = () => {
    if (!isMenuActive)
      return (
        <BurgerLogo
          src={MenuLogo}
          alt="burger logo"
          onClick={handleToggleActiveMenu}
        />
      );
    return (
      <BurgerLogo
        src={CloseMenu}
        alt="burger logo"
        onClick={handleToggleActiveMenu}
      />
    );
  };

  const handleRenderMenuItems = (ComponentToRender, menuType) => {
    if (menuType === 'hiddenMenu' && !isMenuActive) return null;
    return listItems.map(({ path, name }) => {
      return (
        <ComponentToRender
          key={name}
          aria-label="nav-item"
          currentPage={selectedNavItem === name}
        >
          <Link to={path}>{name}</Link>
        </ComponentToRender>
      );
    });
  };
  useEffect(() => {
    setIsMenuActive(false);

    switch (location.pathname) {
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
  }, [location.pathname, selectedNavItem]);

  return (
    <Container role="navbar" aria-label="navbar">
      <Wrapper>
        <Logo src={LogoImg} alt="Ghibli studio" />
        <section>
          <List aria-label="nav-list">{handleRenderMenuItems(ListItem)}</List>
          {handleRenderMenuIcon()}
        </section>
        <HiddenMenuContainer>
          <HiddenMenuList>
            {handleRenderMenuItems(HiddenMenuItem, 'hiddenMenu')}
          </HiddenMenuList>
        </HiddenMenuContainer>
      </Wrapper>
    </Container>
  );
}
