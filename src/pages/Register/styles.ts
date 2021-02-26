import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 6rem;

  .sub-title{
    text-align: center;
    color: ${props => props.theme.colors.text};
    padding: 3.5rem;
    font-size: 1rem;
    font-weight: 800;
  }
`

export const Section = styled.section`
  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SectionButter = styled.section`
  max-width: 490px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;