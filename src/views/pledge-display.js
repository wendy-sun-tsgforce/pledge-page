
import React from "react";
// reactstrap components
import {
  Button, Row, Container
} from "reactstrap";
// reactstrap components

// core components
import ShatterProofHeader from "components/Headers/ShatterProofHeader.js";
import Pledge from 'components/Content/Pledge.js'
import SignUp from 'components/Content/SignUp.js'
import AllPledges from 'components/Content/AllPledges.js'
import DemoFooter from "components/Footers/DemoFooter.js";


function PledgeDisplay(props) {
  return (
    <Container className='h-100 d-flex align-items-center'>
      <div className="main mt-5">
        <AllPledges />
        <Row className='align-items-center justify-content-center'>
          <Button color="shatterproof" outline size="lg" type="button"
          className='col-3'
          onClick={() => props.toggleSignPledge()}>
            Take the pledge now!
          </Button>
        </Row>
      </div>
    </Container>
  );
}

export default PledgeDisplay;
