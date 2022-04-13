import styled from 'styled-components';

function handleRenderCurrentPage (isCurrentActive) {
  return isCurrentActive ? 'color: #607d8b; border-bottom: 2px solid #607d8b;' : null;
}

export const Container = styled.nav`
  background-color: #80bdf0;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1920px;

  section {
    display: flex;
    padding: 42px 10px 0 0;

    @media(max-width: 480px) {
      padding: 10px 15px 0 0;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;

  a {
    color: #030303d4;
    transition: color .3s ease;
    border-bottom: 2px solid transparent;
    ${props => handleRenderCurrentPage(props.currentPage)};

    :hover {
      color: #607d8b;
    }
  }
`;

export const Logo = styled.img`
  width: 15.5rem;
  padding:  10px;
`;

export const BurgerLogo = styled.img`
  display: none;
  width: 40px;

  @media(max-width: 480px){
    display: block;
  }
`;

export const HiddenMenuContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  transform: translate(0, 100%);
  z-index: 20;
`;

export const HiddenMenuList = styled.ul`
  list-style: none;
  background-color: #202020;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  box-shadow: 0 0 0.5em #80bdf0 inset;

  li + li {
    border-top: 1px solid #80bdf0;
  }
`;

export const HiddenMenuItem = styled.li`
  width: 100%;
  color: #fff;

  ${props => props.currentPage ? 'background-color: #191818; box-shadow: 0 0 2em #57a5ff inset; color: #57a5ff;' : ''}

  a { 
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: inherit;
    width: 100%;
    padding: 10px 0;
  }
`;