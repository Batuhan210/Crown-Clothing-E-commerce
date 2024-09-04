import styled from 'styled-components';


export const BaseButton = styled.button`
    min-width: 150px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 0.8rem;
    background-color: #000000;
    color: #ffffff;
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  

    &:hover {
      background-color: #ffffff;
      color: #000000;
      border: 1px solid #000000c8;
    }
`;


export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: #ffffff;
      &:hover {
        background-color: #357ae8;
        border: none;
        }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
      &:hover {
        background-color: #000000;
        color: #ffffff;
        border: none;
        }
`;