/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Card, CardTitle, CardText,
  NavbarBrand, Navbar,
  Row,
  Col
} from "reactstrap";

function SectionButtons() {
  return (
    <>
    <Container className="tim-container">
    <h2 className='align-center'>Check out + Join these pledges too!</h2>
    <div style={{width: "100%", height: "30px"}}></div>

        <Container>
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle>Wendy Ni</CardTitle>
                <CardText>I pledge to be more patient with more family when I
                educate them on the harm of addiction disease.</CardText>
                <Button>Sign this pledge!</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle>Wendy Sun</CardTitle>
                <CardText>I pledge to talk to my local lawmakers on how
                we can make institutional changes to support the recovery process
                and decriminalize addiction</CardText>
                <Button>Sign this pledge!</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle>Vishal</CardTitle>
                <CardText>This is a longer pledge and the card supports a longer
                length - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                viverra.</CardText>
                <Button>Sign this pledge!</Button>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Sign this pledge!</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Sign this pledge!</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Sign this pledge!</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default SectionButtons;
