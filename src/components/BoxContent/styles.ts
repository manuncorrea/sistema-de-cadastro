import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  margin-top: 2rem;
  height: 600px;
  border-radius: 20px;
  background: ${props => props.theme.colors.box};

  @media(max-width: 1064px){
    max-width: 800px;
    height: 600px;
    margin-bottom: 100px;
  }

  @media(max-width: 850px){
    max-width: 700px;
    height: 800px;
  }

  @media(max-width: 750px){
    max-width: 650px;
    height: 800px;
  }

  @media(max-width: 670px){
    max-width: 600px;
    height: 800px;
  }

  @media(max-width: 550px){
    max-width: 450px;
    height: 800px;
  }

  @media(max-width: 380px){
    max-width: 300px;
    height: 800px;
  }
`;