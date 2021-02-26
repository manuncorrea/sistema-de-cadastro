import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 2rem;
  height: 600px;
  border-radius: 20px;
  background: ${props => props.theme.colors.box};
`;