import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Headroom from "react-headroom";
import '../assets/css/argon.css';
import '../assets/css/argon2.css.map';
import '../assets/css/argon3.min.css';

import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Navbar,
  Nav,
  Container
} from "reactstrap";

export default class Header extends Component{

  render(){
    return(
      <>
        <header className="header-global">
          <Headroom>
          <Navbar expand="lg">
            <Container>

              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className='collapsing-out'>
                <Nav className="navbar-nav-hover" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>

                      <span className="nav-link-inner--text">Opciones</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/" tag={Link}>
                        Inicio
                      </DropdownItem>
                      <DropdownItem to="/countries" tag={Link}>
                        Paises
                      </DropdownItem>
                      <DropdownItem to="/add" tag={Link}>
                        Agregar Pais
                      </DropdownItem>
                      <DropdownItem to="/departaments" tag={Link}>
                        Departamentos
                      </DropdownItem>
                      <DropdownItem to="add_departament" tag={Link}>
                        Agregar Departamento
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                </UncontrolledCollapse>
            </Container>
          </Navbar>
          </Headroom>
        </header>
        {/*<div>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/countries'>Paises</Link></li>
              <li><Link to='/departaments'>Departamentos</Link></li>
              <li><Link to='/add_departament'>Agregar Departamento</Link></li>
              <li><Link to='/add'>Agregar Pais</Link></li>
            </ul>
          </nav>
        </div>*/}
      </>

    );
  }
}
