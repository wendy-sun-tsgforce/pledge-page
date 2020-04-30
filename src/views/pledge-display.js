
import React from "react";

// reactstrap components

// core components
import ShatterProofHeader from "components/Headers/ShatterProofHeader.js";
import Pledge from 'components/Content/Pledge.js'
import SignUp from 'components/Content/SignUp.js'
import AllPledges from 'components/Content/AllPledges.js'
import DemoFooter from "components/Footers/DemoFooter.js";


function Index() {
  return (
    <>
      <div className="main">
        <AllPledges />
      </div>
      <DemoFooter />
    </>
  );
}

export default Index;
