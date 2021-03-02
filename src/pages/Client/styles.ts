import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;

  .sub-title{
    text-align: center;
    color: ${props => props.theme.colors.text};
    padding: 3.5rem;
    font-size: 1rem;
    font-weight: 800; 
  }
`

export const Container = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1064px){
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 360px){
    width: 200px;
  }

  
`;