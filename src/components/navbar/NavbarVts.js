import React, { Fragment, Fragments } from 'react';

import { Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import "./NavbarVts.css";
import {ThemeProvider} from 'react-bootstrap';


const NavbarVts = () => {
  return (

    <ThemeProvider
      breakpoints={[ 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>

      <div className='vts'>
        <Container>
          <Row>
            <Col sm={3}></Col>
            <Col sm={12}> <Navbar bg="light" expand="lg" style={{ width: "default", }}>
              <Container fluid>
                <Navbar.Brand href="#" >Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                  </Nav>

                  <Form className="d-flex" style={{ paddingRight: '10px' }}>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button style={{ color: 'whitesmoke' }}><BsSearch style={{ fontSize: '20px', }} /></Button>
                  </Form>&nbsp;&nbsp;&nbsp;

                  Rohan sharma&nbsp;&nbsp;
                  <CgProfile style={{ fontSize: '25px' }} />&nbsp;&nbsp;&nbsp;&nbsp;
                  <FiSettings style={{ fontSize: '25px' }} /> &nbsp;&nbsp;&nbsp;&nbsp;
                  <IoMdNotificationsOutline style={{ fontSize: '25px' }} />

                </Navbar.Collapse>
              </Container>
            </Navbar>
            </Col>
          </Row>
        </Container>


      </div>
    </ThemeProvider>


  );
};

export default NavbarVts;
