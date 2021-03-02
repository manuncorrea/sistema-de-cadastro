import styled from 'styled-components';

export const Container = styled.button`
  background: ${props => props.theme.colors.secundary};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${props => props.theme.colors.textButton};
  width: 100%;
  font-size: 1rem;
  font-weight: 900;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover{
    background: ${props => props.theme.colors.secundaryHover};
  }

`;