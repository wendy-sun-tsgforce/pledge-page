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

// core components
import Pledge from './pledge';
import PledgeDisplay from './pledge-display';
import ThankYou from './thank-you';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSubmit: false,
      inputNewPledge: false
    };
    this.toggleSubmit = this.toggleSubmit.bind(this);
    this.toggleSignPledge = this.toggleSignPledge.bind(this);
  }

  toggleSubmit() {
    this.setState(
      {
        onSubmit: !this.state.onSubmit
      }
    )
  }

  toggleSignPledge() {
    this.setState(
      {
        inputNewPledge: !this.state.inputNewPledge
      }
    )
  }

  render() {
    return (
      <div>
        <div className="main">
        {!this.state.inputNewPledge ?
          <PledgeDisplay toggleSignPledge={this.toggleSignPledge}/>
          :
          <div />
        }

        {this.state.inputNewPledge && !this.state.onSubmit ?
          <Pledge toggleSubmit={this.toggleSubmit}/>
          :
          <div/>
        }

        {this.state.inputNewPledge && this.state.onSubmit ?
          <ThankYou/>
          :
          <div/>
        }
        </div>
      </div>
    );
  }

}

export default Index;
