import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../custom.style/navigation.main.css'

class NavigationMain extends Component{

    componentDidMount(){
        window.addEventListener('scroll', this.navbarShrink)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.navbarShrink)
    }

    navbarShrink = () => {
        const mainNavigation = document.getElementById('main-navigation');
        
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mainNavigation.style.paddingTop = "0";
            mainNavigation.style.paddingBottom = "0";
        }else {
            mainNavigation.style.paddingTop = "28px";
            mainNavigation.style.paddingBottom = "28px";
        }
    }

    render(){
        return (
            <div id="main-navigation" className="container-fluid navbar-fixed" style={{ backgroundColor: '#eee', zIndex : 15 }}>
                <div className="container">
                    <nav>
                        <ul className="navbar navbar-custom float-left">
                            <li className="navbar-item">
                                <NavLink className={ ({isActive}) => "navbar-link" + (isActive ? " active" : "") } 
                                    to="/">Home</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink className={ ({isActive}) => "navbar-link" + (isActive ? " active" : "") } 
                                    to="/about">About</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink className={ ({isActive}) => "navbar-link" + (isActive ? " active" : "") } 
                                    to="/contact">Contact</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink className={ ({isActive}) => "navbar-link" + (isActive ? " active" : "") } 
                                    to="/todo">Todo</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar navbar-custom float-right">
                            <li className="navbar-item">
                                <a className="navbar-link" href="#">Sign In</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/">Login</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    };
}


export default NavigationMain;