import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const TopNavBar = () => {

  return (
    <Navbar fixed="top" collapseOnSelect expand="md" className="sf-bg-color-primary w100" variant="dark">
      <div className='sf-flex sf-justify w100'>
      <Container className='top-nav-container no-padding '>
        <Navbar.Brand href="/home">
          <span className='top-nav-logo'>
          
          </span>
        </Navbar.Brand>
         
          <>
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='top-nav-link' href="/home#hero-area">Login</Nav.Link>
              
              <Nav.Link className='top-nav-link' href="/home#about">About</Nav.Link>
              <Nav.Link className='top-nav-link' href="/home#pricing">Pricing</Nav.Link>
              <Nav.Link className='top-nav-link' href="/home#review">Review</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </>
          
      </Container>
      </div>
    </Navbar>
  )


}
  
  
  
  
export default TopNavBar; 