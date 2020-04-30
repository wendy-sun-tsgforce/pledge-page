
import React from "react";
import {Container, Row} from "reactstrap";
// reactstrap components

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Pledge from 'components/Content/Pledge.js'
import AllPledges from 'components/Content/AllPledges.js'
import DemoFooter from "components/Footers/DemoFooter.js";


function Index() {
  return (
    <>
      <ProfilePageHeader />
      <div className="main">

        <Container className="tim-container">
          <div className='align-center' id="typography">
            <h1>Thank You!</h1>
            <h4>Your support means we are one step closer to our goal.</h4>
          </div>
        </Container>
        <AllPledges />
      </div>
      <DemoFooter />
    </>
  );
}

export default Index;
