import React, { Component } from 'react';
import NavList from './NavList';


class Navbar extends Component {
    render(){
      
      var createNavLink = function(item,index) {
        return <NavList key = {item.title + index} href = {item.href} title = {item.title} />;
      } ;
        return (
            
 <div>
 
<div class="bs-example">
    <nav class="navbar navbar-default">

        <div class="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="/Home" class="navbar-brand">Quizilla App</a>
        </div>
        
        <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
    {this.props.navData.map(createNavLink)}
    </ul>
</div>
      </nav>
      </div>
    </div>
            
            );
    }
}

export default Navbar;