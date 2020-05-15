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
  NavbarBrand, Navbar,
  Row,
  Col
} from "reactstrap";

import axios from 'axios';

const tempOptions = [
  {
  "pledgeId": 1,
  "firstName": "Shaun",
  "lastName": "Koss",
  "likeCount": 16,
  "pledgeBody": "Sample custom pledge"
  },
  {
  "pledgeId": 2,
  "firstName": "Gladyce",
  "lastName": "Rolfson",
  "likeCount": 0,
  "pledgeBody": "Sample custom pledge"
  },
  {
  "pledgeId": 3,
  "firstName": "Sammy",
  "lastName": "McGlynn",
  "likeCount": 10,
  "pledgeBody": "Sample custom pledge"
  },
  {
  "pledgeId": 5,
  "firstName": "Robbie",
  "lastName": "Willms",
  "likeCount": 10,
  "pledgeBody": "Sample custom pledge"
  },
  {
  "pledgeId": 7,
  "firstName": "Walker",
  "lastName": "Ebert",
  "likeCount": 10,
  "pledgeBody": "Sample custom pledge"
  },
  {
  "pledgeId": 9,
  "firstName": "Brain",
  "lastName": "Tremblay",
  "likeCount": 10,
  "pledgeBody": "Sample custom pledge"
  }
]

class AllPledges extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfPledges: []
    }
    this.refreshPledges = this.refreshPledges.bind(this);
    this.likePledge = this.likePledge.bind(this);
  }

  refreshPledges() {
    let that = this;
    const headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    headers.append('Access-Control-Allow-Origin', '*');
    // Make a request for a user with a given ID
    return axios.get('http://localhost:8000/pledges', {headers: headers})
      .then(function (response) {
        // handle success
        console.log(response);
        that.setState({
          listOfPledges: response.data
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  // componentDidMount() {
  //   this.refreshPledges();
  // }

  likePledge(pledgeId) {
    let that = this;
    const headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    headers.append('Access-Control-Allow-Origin', '*');
    // Make a request for a user with a given ID
    axios.get(`http://localhost:8000/pledges/${pledgeId}/like`, {headers: headers})
      .then(function (response) {
        // handle success
        console.log(response);
        return that.refreshPledges();
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
                  <CardTitle>{`${e.firstName} ${e.lastName}`}</CardTitle>
                  <CardText>
                    <p>{e.pledgeBody}</p>
                    <br/>
                    <p><b>{e.likeCount}</b> people liked this pledge!</p>
                  </CardText>
                  <Button onClick={()=>this.likePledge(e.pledgeId)}>Like this pledge!</Button>
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

export default AllPledges;
