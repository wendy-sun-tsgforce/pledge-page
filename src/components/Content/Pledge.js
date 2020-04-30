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
          <h3>
            <b>Medication Works! Pledge Your Support for All Recovery Journeys.</b> <br /><br />
            <small>Addiction is a chronic, relapsing brain disease. Just as with other diseases, medications can be a highly effective treatment. In fact, FDA-approved medications like buprenorphine, methadone, and naltrexone are widely considered by experts and researchers to be the gold standard of treatment for opioid use disorder.
<br/>
But far too often, stigma, shame, and misinformation prevent patients in need from receiving the medications that could save their lives. And people who do use medications to treat their addiction sometimes feel ostracized and judged, like they’re not “really” in recovery.
<br/>
This has to end.
<br/>
Medication-assisted treatment (MAT) is the practice of utilizing medications as well as cognitive and behavioral therapies to treat substance use disorders. These medications prevent overdose, ease symptoms of withdrawal, decrease cravings, and establish normal brain function. Their usage is recognized by every leading group of addiction and health experts, from the National Institute on Drug Abuse (NIDA) and the American Society of Addiction Medicine (ASAM) to the Centers for Disease Control (CDC) and the World Health Organization (WHO).
<br/>
People using medications for addiction can work, drive, and care for their loved ones. Using medications to support addiction treatment is not “replacing one drug with another”—it’s a lifesaving and evidence-based approach.
<br/>
Every person with addiction should receive an individualized treatment plan. Medications may not be right for everyone—but they should be made fully available as an option, without derision or judgment, to everyone entering treatment for a substance use disorder.
<br/>
Add your name NOW to show that you stand with people who use medications to support their recovery. Let them know that you don’t buy into the judgments or the discrimination, and that you value every type of recovery journey.</small>
          </h3>
          <div style={{width: "100%", height: "30px"}}></div>

          <Navbar className="bg-primary" style={{width: "100%"}} expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Join # People and Sign the Pledge Today!
              </NavbarBrand>
              <button
                aria-controls="navbarNav"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right burger-menu"
                data-target="#navbar-primary"
                data-toggle="collapse"
                id="navbar-primary"
                type="button"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
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
