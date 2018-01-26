import React from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return(
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
              <Navbar.Brand>
                 <a href="#brand">Quizzilla</a>
             </Navbar.Brand>
             <Navbar.Toggle />
             </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
              <NavItem eventKey= {1}>
                    <Link to="/link">Login</Link>
                  </NavItem>
             <NavItem eventKey= {2}>
                    <Link to="/">SignUp</Link>
              </NavItem>
                </Nav>
             </Navbar.Collapse>
               </Navbar>
            );
    }
    
}
export default Header;