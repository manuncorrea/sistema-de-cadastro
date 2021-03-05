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

    @media(max-width: 550px){
      padding: 2.5rem;
      font-size: 0.75rem;
      font-weight: 500;
    }

    @media(max-width: 380px){
      padding: 1.5rem;
      font-size: 0.5rem;
      font-weight: 400;
    }
  }
`

export const Section = styled.section`
  div{
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;

    /**@media(max-width: 1064px){
      width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
 
    }**/

    @media(max-width: 550px){
      width: 300px;
      display: flex;
      justify-content: center;
    }

    @media(max-width: 380px){
      width: 250px;
      display: flex;
      justify-content: center;
    }
  }

  /* .teste {
    display: grid;
    grid-columns: 1fr 1fr 1fr;
  } */

`;

export const SectionButter = styled.section`
  max-width: 590px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn{
    width: 300px;

    @media(max-width: 550px){
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media(max-width: 380px){
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;