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
  Row,
  Col
} from "reactstrap";

function SectionButtons(props) {
  return (
    <>
        <Container>
          <Row>
            <Col sm="3">
              <FormGroup>
                <Label for="exampleSelect">First Name</Label>
                <Input type="text" />
              </FormGroup>
            </Col>

            <Col sm="3">
              <FormGroup>
              <Label for="exampleSelect">Last Name</Label>
                <Input type="text" />
              </FormGroup>
            </Col>

            <Col sm="3">
              <FormGroup>
                <Label for="exampleSelect">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="example@abc.com" />
              </FormGroup>
            </Col>

            <Col sm="3">
              <FormGroup>
              <Label for="exampleSelect">Zip Code</Label>
                <Input placeholder="ex. 10010" type="text" />
              </FormGroup>
            </Col>

            <br />
            <Col sm="12">
            <FormGroup check>
              <Label check>
                <Input defaultValue="" type="checkbox" />
                I would like to receive newsletters and hear more from Shatterproof
                <span className="form-check-sign" />
              </Label>
            </FormGroup>
            </Col>

            <Col sm="12">
            <br />
            <FormGroup>
              <Label for="exampleText">Add your own pledge!</Label>
              <Input type="textarea" placeholder="I pledge to..." name="text" id="exampleText" />
            </FormGroup>
            </Col>

            <Col sm="12">
            <FormGroup check>
              <Label check>
                <Input defaultValue="" type="checkbox" />
                I allow Shatterproof to share my pledge on their social media pages
                <span className="form-check-sign" />
              </Label>
            </FormGroup>
            </Col>

            <Col sm="12" md={{ size: 4, offset: 4 }}>
            <br />
            <Button color="danger" outline size="lg" type="button" className='full-width'
            onClick={() => props.toggleSubmit()}>
              Submit Your Pledge
            </Button>
            </Col>
          </Row>
          <br />
        </Container>
        <div style={{width: "100%", height: "30px"}}></div>

    </>
  );
}

export default SectionButtons;
