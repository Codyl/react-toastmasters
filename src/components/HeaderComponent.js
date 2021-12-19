import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import LoginComponent from "./LoginComponent";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  hideNav = () => {
    this.setState({
      isNavOpen: false,
    });
  };
  componentDidMount() {
    window.scroll(window.top);
    let prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", () => {
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      if (
        (maxScroll > 0 && prevScrollpos > currentScrollPos) ||
        (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
        (prevScrollpos <= 0 && currentScrollPos <= 0)
      ) {
        this.hideNav();
      }
      prevScrollpos = currentScrollPos;
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleLogin = (event) => {
    window.alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    this.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand
              className="mr-auto"
              href="/"
              src="/assets/images/logo.png"
              height="30"
              width="30"
              alt="NuCamp Logo">
              Midway Toastmasters
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem onClick={this.hideNav}>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                {/* TODO if no current user show this navItem */}
                <NavItem onClick={this.hideNav}>
                  <NavLink className="nav-link" to="/join">
                    <i className="fa fa-handshake-o fa-lg" /> Join
                  </NavLink>
                </NavItem>
                {/* TODO if no current user show this navItem */}
                <NavItem onClick={this.hideNav}>
                  <NavLink className="nav-link" to="/about">
                    <i className="fa fa-info fa-lg" /> About
                  </NavLink>
                </NavItem>
                {/* TODO if no current user show this navItem */}
                <NavItem onClick={this.hideNav}>
                  <NavLink className="nav-link" to="/contact">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
                <NavItem onClick={this.hideNav}>
                  <NavLink
                    className="nav-link"
                    to={`/events/${new Date().getFullYear()}/${
                      new Date().getMonth() + 1
                    }`}>
                    <i className="fa fa-calendar fa-lg" /> Events
                  </NavLink>
                </NavItem>
                {/* Show these navitems if there is a current user  */}
                <NavItem>
                  <NavLink className="nav-link" to="/profile/<username>">
                    <i className="fa fa-user fa-lg" /> Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/directory">
                    <i className="fa fa-group fa-lg" /> Members
                  </NavLink>
                </NavItem>
                {/* TODO if user is admin show this navitem */}
                <NavItem>
                  <NavLink className="nav-link" to="/administration">
                    <i className="fa fa-key fa-lg" /> Administration
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                <Button
                  outline
                  onClick={() => {
                    this.toggleModal();
                    this.hideNav();
                  }}>
                  <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>
        <LoginComponent
          toggleModal={this.toggleModal}
          isModalOpen={this.state.isModalOpen}
        />
      </React.Fragment>
    );
  }
}
export default Header;
