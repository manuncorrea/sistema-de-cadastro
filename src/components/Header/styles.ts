import styled from 'styled-components';

export const Navbar = styled.header`
  width: 100%;
  height: 60px;
  line-height: 60px; /* centraliza na vertical */
  background: ${props => props.theme.colors.primary};
  padding: 0 30px;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media( max-width: 380px){
    max-width: 660px;
    margin: 0 auto;
  }

  div span{
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: ${props => props.theme.colors.textSecundary};

    @media(max-width: 380px){
      font-size: 1rem;
      font-weight: 600;
    }
  }

  .nav {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textSecundary};
    margin-left: 12px;

    @media(max-width: 380px){
      font-size: 1rem;
      font-weight: 500;
      margin-left: 5px;
    }

  }

  .selected {
    color: #fff;
    border-bottom: 0.2rem solid ${props => props.theme.colors.secundary};
  }

`;

