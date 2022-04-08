import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 100%;
    border-radius: 25px;
    box-shadow: 8px 6px 17px 7px rgb(0 0 0 / 38%);
    transition: all .3s ease-in;
    cursor: pointer;

    :hover {
      transform: scale(1.07);
      box-shadow: 0px 12px 8px 4px rgba(0,0,0,0.33);
      border-radius: 4px;
      border: 2px solid gold;
    }

    @media(max-width: 418px){
      :hover {
        margin: 1rem 0;
      }
    }
  }
`;