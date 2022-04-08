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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1920px;

  section {
    display: flex;
    padding: 42px 10px 0 0;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
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