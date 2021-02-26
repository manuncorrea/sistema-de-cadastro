import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished'; 

import { Navbar, Container } from './styles';
import { NavLink } from 'react-router-dom';

interface Props{
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return(
    <Navbar>
      <Container>
        <div>
          <span>manuncorrea</span>
        </div>
        <div>
          <NavLink className="nav"  activeClassName="selected" to="/" >Cadastrar</NavLink>
          <NavLink className="nav" activeClassName="selected" to="/clients">Clientes</NavLink>
        </div>
        <div>
          <Switch
            onChange={toggleTheme}
            checked ={title === 'dark'}
            checkedIcon={false}
            height={20}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
           />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;