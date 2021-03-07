import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
          <Link className="logo" to="/">
            manuncorrea
          </Link>
        </div>
        <div>
          <NavLink className="nav"  activeClassName="selected" to="/" exact>Cadastrar</NavLink>
          <NavLink className="nav" activeClassName="selected" to="/clients">Clientes</NavLink>
        </div>
        <div> 
          <Switch 
            className="toogle"
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