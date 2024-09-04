import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
    top: -20px;
    font-size: 1.2rem;
    color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: 400;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({shrink}) => shrink && shrinkLabelStyles};
`;


export const Input = styled.input`
    background-color: #ffffff;
    color: ${subColor};
    font-size: 1rem;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabel} { 
      ${shrinkLabelStyles}
    }
`

export const Group = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password'] {
    letter-spacing: 0.3em;
  }
`;