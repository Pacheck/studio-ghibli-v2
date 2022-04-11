import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #171616;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 3rem;
  padding: 2rem 5rem;
  max-width: 1920px;

  @media (max-width: 1230px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 4rem;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);

    div img {
      border-radius: 18px;
    }
  }
  @media (max-width: 481px) {
    grid-template-columns: 1fr;
    
    div img {
      border-radius: 9px;
    }
  }
  @media (max-width: 418px) {
    gap: 5rem;
  }
`;

export const LinkContainer = styled.div`
  position: absolute;
  bottom: 2%;
  z-index: 20;
  width: 100%;
  display: flex;
  justify-content: center;
`;