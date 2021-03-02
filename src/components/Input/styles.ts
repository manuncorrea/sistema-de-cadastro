import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 20px 30px;
  margin: 12px 12px 0px 0px;
  border: 0;
  border-radius: 8px;
  background: ${props => props.theme.colors.primaryInput};
  color: ${props => props.theme.colors.primaryPlaceholder};
 

  display: flex;
  align-items: center;

  input{
    flex: 1;
    border: 0;
    background: transparent;
    color: ${props => props.theme.colors.text};
    outline: 0;

    &::placeholder{
     color: ${props => props.theme.colors.primaryPlaceholder};
     font-weight: 400;
    }   
  }

  svg{
    margin-right: 16px;
  }
`;