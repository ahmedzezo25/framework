

import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Navvbar() {

  const [padding, setPadding] = useState(30);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setPadding(0);
      } else {
        setPadding(30);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className=" navbar navbar-expand-lg fixed-top " style={{ padding: `${padding}px` }}>
      <Container>
        <Navbar.Brand className='text-white text-uppercase fw-bloder fs-2' href="#home">START FRAMEWORK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-4">
          {/* <NavLink className="nav-link" to=""></NavLink> */}

            <NavLink className="nav-link   text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="about">About</NavLink>
            <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="portfolio">Portfolio</NavLink>
            <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="contact">Contact</NavLink>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navvbar;