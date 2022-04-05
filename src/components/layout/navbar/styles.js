import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #80bdf0;

  section {
    display: flex;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const ListItem = styled.li`
`;

export const Logo = styled.img`
  width: 200px;
  padding:  10px;
`;