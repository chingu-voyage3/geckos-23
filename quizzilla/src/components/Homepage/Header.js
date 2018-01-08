import React from 'react';
import { Navbar, Nav , NavItem } from 'react-bootstrap';

class Header  extends React.Component {
	render(){
const navbarInstance = (
	<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#brand">Quizzilla</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem eventKey={1} href="#">
					Join
				</NavItem>
				<NavItem eventKey={2} href="#">
					Login
				</NavItem>
			
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

return(
	<div>
	{navbarInstance}
	</div>
	);
}

 }

export default Header;