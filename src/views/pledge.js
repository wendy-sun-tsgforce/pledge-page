
import React from "react";

// reactstrap components

// core components
import ShatterProofHeader from "components/Headers/ShatterProofHeader.js";
import Pledge from 'components/Content/Pledge.js'
import SignUp from 'components/Content/SignUp.js'
import DemoFooter from "components/Footers/DemoFooter.js";


function PledgeContainer(props) {
  return (
    <>
      <ShatterProofHeader />
      <div className="main">
        <Pledge />
        <SignUp toggleSubmit={() => props.toggleSubmit()}/>
      </div>
      <DemoFooter />
    </>
  );
}

export default PledgeContainer;
