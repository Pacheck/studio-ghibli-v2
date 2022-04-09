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
  gap: 2rem;
  padding: 2rem 5rem;
  max-width: 1920px;

  @media (max-width: 1230px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
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
`;