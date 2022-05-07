import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import './Card.css'


//changes
function Cardss() {
    return (
<div>
        {/* // Panic Status Cards */}
        <Card className="crd">
            <Card.Body>
                <h5>
                    <Card.Title>Panic Status</Card.Title>
                    <Card.Text>5</Card.Text>
                    <Card.Text>2</Card.Text>
                    <Card.Text>7</Card.Text>
                   

                </h5>
                <Button> View </Button>
            </Card.Body>
        </Card>

        {/* // Today Alarm card */}
        <Card className="crdd">
            <Card.Body>
                <h5>
                    <Card.Title>Moving Vehicles</Card.Title>
                    <Card.Text>327</Card.Text>
                    <Card.Text>Running</Card.Text>
                </h5>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Cardss;





