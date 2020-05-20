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
// helpful notification handler
import NotificationSystem from 'react-notification-system';
// http request
import axios from 'axios';

// reactstrap components
import {
  Button,
  Label,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Card, CardTitle, CardText,
  Row,
  Col,
  Spinner
} from "reactstrap";
import { textChangeRangeIsUnchanged } from "typescript";

class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      zipcode: '',
      organization: '',
      customPledge: '',
      newsletterSub: false,
      isSubmitting: false
    };

    this.notificationSystem = React.createRef();

    this.submitForm = this.submitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showNotification = this.showNotification.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  showNotification(type, message) {
    this.notificationSystem.addNotification({
      message: message,
      position: 'tc',
      autoDismiss: 3,
      level: type
    });
  }

  isEmpty(variable) {
    return typeof variable === 'undefined' || variable === '';
  }

  handleSubmit() {
    this.setState({isSubmitting: true}, this.submitForm);
  }

  submitForm() {
    console.log(this.state);
    let valid = true;
    if (this.isEmpty(this.state.firstName)){
      this.showNotification('error', 'Missing First Name!');
      valid = false;
    }
    if (this.isEmpty(this.state.lastName)){
      this.showNotification('error', 'Missing Last Name!');
      valid = false;
    }
    if (this.isEmpty(this.state.email)){
      this.showNotification('error', 'Missing Email!');
      valid = false;
    }
    if (this.isEmpty(this.state.zipcode)){
      this.showNotification('error', 'Missing Zip Code!');
      valid = false;
    }
    if (this.isEmpty(this.state.customPledge)){
      this.showNotification('error', 'Missing Custom Pledge!');
      valid = false;
    }
    if (valid) {
      let that = this;
      const data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        zipcode: this.state.zipcode,
        organization: this.state.organization,
        customPledge: this.state.customPledge,
        newsletterSub: this.state.newsletterSub,
        pledged: true
      }
      const headers = new Headers();
      headers.append('pragma', 'no-cache');
      headers.append('cache-control', 'no-cache');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Content-Type', 'application/json');
      axios.post(`${process.env.REACT_APP_API_URL}/users/add`, data, {headers: headers})
        .then(function (response) {
          // handle success
          that.props.toggleSubmit();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          if (error.response.status === 500) {
            that.showNotification('error', error.response.data.detail);
          } else {
            that.showNotification('error', 'Oh no! Something went wrong!');
          }
        })
        .finally(() => {
          that.setState({isSubmitting: false});
        });
    } else {
      this.setState({isSubmitting: false});
    }
  }

  handleInputChange(event) {
    const property = event.target.name;
    if (event.target.type === 'text' || event.target.type === 'textarea') {
      const value = event.target.value;
      this.setState({
        [property]: value
      });
    } else if (event.target.type === 'checkbox') {
      const checked = event.target.checked;
      this.setState({
        [property]: checked
      });
    }
  }

  render() {
    return (
        <Container className='mb-5'>
          <NotificationSystem ref={e => (this.notificationSystem =e)} />
          <Row>
            <Col sm="3">
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange}/>
              </FormGroup>
            </Col>

            <Col sm="3">
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange}/>
              </FormGroup>
            </Col>

            <Col sm="3">
              <FormGroup>
                <Label for="email">Email</Label>
                <Input name="email" type="text" value={this.state.email} onChange={this.handleInputChange}/>
              </FormGroup>
            </Col>

            <Col sm="3">
              <FormGroup>
              <Label for="zipcode">Zip Code</Label>
              <Input name="zipcode" type="text" placeholder="ex. 07319" value={this.state.zipcode} onChange={this.handleInputChange}/>
              </FormGroup>
            </Col>

            <Col sm="3">
              <FormGroup>
                <Label for="organization">Organization (Optional) </Label>
                <Input name="organization" type="text" value={this.state.organization} onChange={this.handleInputChange}/>
              </FormGroup>
            </Col>

            <br />
            <Col sm="12">
            <br />
            <FormGroup>
              <Label for="customPledge">Add your own pledge!</Label>
              <Input name="customPledge" type="textarea" placeholder="I pledge to..." value={this.state.customPledge} onChange={this.handleInputChange}/>
            </FormGroup>
            </Col>

            <Col sm="12">
            <FormGroup check>
              <Label check>
                <Input id="newsletterSub" name="newsletterSub" type="checkbox" value={this.state.newsletterSub} onChange={this.handleInputChange} />
                I would like to receive email updates from Shatterproof.
                <span className="form-check-sign" />
              </Label>
            </FormGroup>
            </Col>
            <Col sm="12" md={{ size: 4, offset: 4 }}>
            <br />
            <Button color="shatterproof" outline size="lg" type="button"
              className='w-100'
              onClick={this.handleSubmit}
              disabled={this.state.isSubmitting}
            >
              Submit Your Pledge {this.state.isSubmitting ? <Spinner size="sm" color="primary" /> : <React.Fragment/> }
            </Button>
            </Col>
          </Row>
          <br />
        </Container>
    );
  }
}

export default SignUp;
