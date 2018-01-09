import React, {Component} from 'react';
import quizzilla from '../img/quizzilla.png';
import Navbar from './Navbar';


var NavLinks = [
  {
    title:'Home',
    href:'#'
  },
  {
    title:'About',
    href:'#'
  },
  {
    title : 'Login/SignUp',
    href:'#'
  },
  {
    title: 'Contact Us',
    href:'#'
  }
  ];

class Home extends Component {
    render(){
        return (
            
		<Navbar navData={NavLinks} />
           
            
            );
    }
}

export default Home;
