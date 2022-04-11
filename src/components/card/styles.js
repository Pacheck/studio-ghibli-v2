import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  
  a {
    display: flex;
    justify-content: center;
    width: fit-content;
    opacity: 0;
    visibility: hidden;
    padding: .7rem 2.5rem;
    z-index: 10;
    border-radius: 4px;
    color: #e6e2e259;
    background-color: transparent;
    transition: all .3s ease-in;
    transition: visibility 0s, opacity .5s linear;
  }

  img {
    width: 100%;
    border-radius: 25px;
    box-shadow: 8px 6px 17px 7px rgb(0 0 0 / 38%);
    transition: all .3s ease-in;
    cursor: pointer;
  }

  :hover {
    img {
      transform: scale(1.1);
      box-shadow: 0px 12px 8px 4px rgba(0,0,0,0.33);
      border-radius: 4px;
      border: 2px solid #80bdf0;
    }

    a {
      visibility: visible;
      opacity: 1;
      transform: scale(1.07);
      animation: Resize .5s ease-in-out forwards;
      background-color: rgba(30 29 29 / 90%);
      color: #fff;
      
      :hover { 
        background-color: rgba(0, 0, 0, 0.85);
      }
    }
  }

  @media(max-width: 480px){
    :hover {
      margin: 1rem 0;
    }

    a {
      padding: 1.5rem 2.5rem;
      font-size: 1.5rem;
    }
  }

  @media(max-width: 768px){
    :hover {
      a {
        visibility: visible;
        opacity: 1;
        transform: scale(1.07);
        animation: Resize .5s ease-in-out forwards;
        background-color: rgba(30 29 29 / 95%);
        color: #fff; 
      }
    }
  }

  @keyframes Resize {
    0% {
      width: auto;
    }
    20% {
      width: 50%;
    }
    30% {
      width: 55%;
    }
    50% {
      width: 60%;
    }
    100% {
      width: 80%;
    }
  }
`;
