import styled from 'styled-components';


export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) =>`url(${imageUrl})`};
`;


export const Body = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    background-color: #ffffff;
    opacity: 0.7;
    position: absolute;
    width: 140px;

    h2 {
      font-weight: 700;
      margin: 0 6px 0;
      font-size: 1.2rem;
      color: #000000;
      text-transform: uppercase;
    }

    p {
      font-size: 1rem;
      font-weight: 500;
    }
`;


export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 400px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
  }  
    }

    &:first-child {
    margin-right: 7.5px;
    }

  &:last-child {
    margin-left: 7.5px;
    }
`;