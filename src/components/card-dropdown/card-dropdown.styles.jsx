import styled from 'styled-components';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton }
  from '../button/button.styles';


  
export const CardDropdownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #000000;
    background-color: #ffffff;
    top: 90px;
    right: 40px;
    z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;


export const EmptyMessage = styled.span`
    font-size: 1.2rem;
    margin: 50px auto;
`;


export const CardItems = styled.div`
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
`;
  