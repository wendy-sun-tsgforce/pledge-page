
import React from "react";
// reactstrap components
import {
  Button, Row
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
    <>
      <div className="main">
        <Row className='align-items-center justify-content-center'>
          <Button color="shatterproof" outline size="lg" type="button"
          className='col-2'
          onClick={() => props.toggleSignPledge()}>
            Submit Your Pledge
          </Button>
        </Row>
        <AllPledges />
      </div>
    </>
  );
}

export default PledgeDisplay;
