import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
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
      border: 2px solid #80bdf0;;
    }

    @media(max-width: 418px){
      :hover {
        margin: 1rem 0;
      }
    }
  }

  :hover a {
    background-color: transparent;
    transform: scale(1.07);
  }

  //TODO arrumar o hover do ver mais
  /* a {
    color: red;
    background-color: gray;
    padding: .7rem 2.5rem;
    position: absolute;
    border-radius: 4px;
    left: calc(50% - 69.14px);
    bottom: 5%;
    transition: all .3s ease-in;

    :hover {
      transform: scale(1.07);
    }
  } */
`;