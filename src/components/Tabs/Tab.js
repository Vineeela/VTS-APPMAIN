
import React, { useState } from 'react'
import {Nav,Container,Row,Col } from 'react-bootstrap';
 const Tab = () => {
     const[value,setValue]=useState(2);
  return (
   <Container style={{paddingTop:'25px'}}>
       <Row>
           <Col xs={12}>
      <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="link-2">Trails</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Trip/Trail</Nav.Link>
  </Nav.Item>
</Nav>
</Col> 
</Row> 
</Container>
  )
};
export default Tab;

