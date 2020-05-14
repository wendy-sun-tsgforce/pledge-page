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
import * as React from "react";
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

import axios from 'axios';

const tempOptions = [
  {
    name: "Wendy Sun",
    pledge: "I pledge to be more patient with more family when I educate them on the harm of addiction disease."
  },
  {
    name: "Wendy Ni",
    pledge: "I pledge to be more patient with more family when I educate them on the harm of addiction disease."
  },
  {
    name: "Vishal",
    pledge: "This is a longer pledge and the card supports a longer length"
  },
  {
    name: "Wendy Sun",
    pledge: "I pledge to be more patient with more family when I educate them on the harm of addiction disease."
  },
  {
    name: "Wendy Ni",
    pledge: "I pledge to be more patient with more family when I educate them on the harm of addiction disease."
  },
  {
    name: "Vishal",
    pledge: "This is a longer pledge and the card supports a longer length"
  },
]

class SignUp extends React.Component<{}, {}>{

  constructor(props) {
    super(props);
    this.state = {
      listOfPledges: []
    }
  }

  componentDidMount() {
    // Make a request for a user with a given ID
    axios.get('/user?ID=12345')
      .then(function (response) {
        // handle success
        console.log(response);
        this.setstate({
          listOfPledges: response
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render() {
    return (
      <div>
      <Container className="tim-container">
      <h2 className='align-center'>Check out + Join these pledges too!</h2>
      <div style={{width: "100%", height: "30px"}}></div>

          <Container>
            <Row>
            {tempOptions.map((e) => (
              <Col sm="4">
                <Card body>
                  <CardTitle>{e.name}</CardTitle>
                  <CardText>{e.pledge}</CardText>
                  <Button>Like this pledge!</Button>
                </Card>
              </Col>
            ))}
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default SignUp;
