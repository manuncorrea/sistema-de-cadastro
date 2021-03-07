import styled from 'styled-components';

export const Container  = styled.div`
  .cabecalho-text {
    background: ${props => props.theme.colors.secundary};
    color: #fff;
  }

  button{
    margin-right: 3px;
    background: transparent;
    border: 0;

    svg{
      width: 15px;
      height: 15px;
      color:#ffbf00;
    }

    > svg {
      color: red;
    }
  }
`;