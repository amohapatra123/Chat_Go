import React, { PureComponent } from "react";
import { PaperButton, PaperInput } from "component";
import { form } from "../Utils/loginConfig";
import { Link } from "react-router-dom";
import { CardBody, Container, Row, Col } from "reactstrap";
import { handlechange, handledanger, handlesuccess } from "../Utils/validate";
import axios from "axios";
import "../Styles/form.css";
export default class Login extends PureComponent {
  state = {
    phone: null,
    password: null,
    formErrors: {
      phone: "",
      password: "",
    },
    message: [],
  };
  handlechange = (e) => {
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    handlechange(name, value, formErrors);
    this.setState({ formErrors, [name]: value });
  };

  renderform = () => {
    const { formErrors } = this.state;
    return form.map((item) => {
      const name = item.name;
      return (
        <Col md={{ size: 12 }} key={item.id}>
          <PaperInput
            input
            addon
            danger={handledanger(name, formErrors)}
            success={handlesuccess(name, formErrors)}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            handlechange={this.handlechange}
          />
          <Col id="errors">
            {item.id === 0 && formErrors.phone}
            {item.id === 1 && formErrors.password}
          </Col>
        </Col>
      );
    });
  };

  handleclick = () => {
    const { phone, password, message } = this.state;
    const request = {
      phone,
      password,
    };
    if ((message.length = 0)) {
      this.setState({ message: null }); //making the array empty for each click of the button.
    }
    axios
      .post(`http://localhost:5000/user/login`, { request })
      .then((res) => {
        console.log(res);
        res.data.map((msg) => {
          return this.setState({
            message: [...this.state.message, msg.msg],
          });
        });
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderError = (message) => {
    const error = (
      <ul className="list-unstyled">
        {message.map((msg, index) => {
          return <li key={index}>{msg}</li>;
        })}
      </ul>
    );
    return error;
  };
  render() {
    const { message } = this.state;
    return (
      <Container>
        <Row className="mt-5">
          <Col md={{ size: 6, offset: 3 }}>
            <div id="form">
              <Row>
                <Col md={{ size: 10, offset: 2 }} xs={{ offset: 2 }}>
                  <div>
                    <h1>C H A T _ G O</h1>
                  </div>
                </Col>
              </Row>
              <CardBody>
                <Row>{this.renderError(message)}</Row>
                <Row>{this.renderform()}</Row>
                <Row>
                  <Col md={{ size: 12 }}>
                    <PaperButton
                      text="Login"
                      size="lg"
                      onClick={this.handleclick}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={{ size: 12 }}>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                  </Col>
                </Row>
                {/* <Row className="mt-4">
                  <Col
                    md={{ size: 12, offset: 4 }}
                    xs={{ size: 11, offset: 4 }}
                  >
                    <h5>Or Login With</h5>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col
                    md={{ size: 3, offset: 2 }}
                    xs={{ size: 4 }}
                    onClick={this.handlefacebook}
                  >
                    <Facebook />
                  </Col>
                  <Col
                    md={{ size: 3 }}
                    xs={{ size: 4 }}
                    onClick={this.handlegoogle}
                  >
                    <Google />
                  </Col>
                  <Col
                    md={{ size: 3 }}
                    xs={{ size: 4 }}
                    onClick={this.handlegithub}
                  >
                    <Github />
                  </Col>
                </Row> */}
              </CardBody>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
