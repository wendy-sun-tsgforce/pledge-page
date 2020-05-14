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

// reactstrap components
import {Button, Input, InputGroup, FormGroup, Label, InputGroupText, Container,
   Row, Col,  UncontrolledCollapse,
     NavbarBrand,
     Navbar,
     NavItem,
     NavLink,
     Nav, } from "reactstrap";

// core components

function Pledge(props) {
  return (
    <>
      <Container className="tim-container">
        <div id="typography">
          <Row>
          <h3 className='text-center'>
            <b>Pledge to transform how our society views addiction</b> <br />
            <small>Together we have the power to use words that reduce harmful stereotypes and save lives.
            <br />
            <br/>
            <b>I pledge to </b>make others feel safe when sharing their stories about their struggles of addiction.
            <br/>
            <b>I pledge to </b>make it easy to discuss addiction at work, in the community, and around the kitchen table.
            <br/>
            <b>I pledge to </b>describe addiction as a treatable disease and use person-first language such as "a person with substance use disorder" instead of using words like "addict" and "substance abuser".
            <br/></small>
          </h3>
          <div style={{width: "100%", height: "30px"}}></div>

          <Navbar className="bg-shatterproof w-100" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Join # People and Sign the Pledge Today!
              </NavbarBrand>
            </Container>
          </Navbar>>
          </Row>
        </div>
        <br />
      </Container>
    </>
  );
}

export default Pledge;
