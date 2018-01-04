import React, {Component} from 'react';
<<<<<<< HEAD
import quizzilla from '../img/quizzilla.png';
=======
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
>>>>>>> c0f1aebaae42434b6ca94385fbf8a533c8b0fe02

class Home extends Component {
    render(){
        return (
            
		<Navbar navData={NavLinks} />
           
            
            );
    }
}

export default Home;
