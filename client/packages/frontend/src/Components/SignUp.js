import React, { PureComponent } from "react";
import { PaperButton, PaperInput } from "component";
import { form } from "../Utils/signUpConfig";
import { Link } from "react-router-dom";
import { CardBody, Container, Row, Col } from "reactstrap";
import { handlechange, handledanger, handlesuccess } from "../Utils/validate";
import axios from "axios";
import "../Styles/form.css";
export default class signUp extends PureComponent {
  state = {
    name: null,
    email: null,
    phone: null,
    password: null,
    password2: null,
    formErrors: {
      name: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
    },
    message: [],
  };
  handlechange = (e) => {
    const { password } = this.state;
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    handlechange(name, value, formErrors, password);
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
            {item.id === 0 && formErrors.name}
            {item.id === 1 && formErrors.email}
            {item.id === 2 && formErrors.phone}
            {item.id === 3 && formErrors.password}
            {item.id === 4 && formErrors.password2}
          </Col>
        </Col>
      );
    });
  };

  handleclick = () => {
    const { name, email, phone, password, password2, message } = this.state;
    const request = {
      name,
      email,
      phone,
      password,
      password2,
    };

    axios
      .post(`http://localhost:5000/user/register`, { request })
      .then((res) => {
        console.log(res);
        res.data.map((msg) => {
          return message.push({ msg: msg.msg });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  showErrors = () => {
    const { message } = this.state;
    message.map((msg) => {
      return `${msg.msg}`;
    });
  };

  render() {
    const { message, name } = this.state;
    const error = message.map((msg) => {
      return <div>{`${msg.msg}`}</div>;
    });
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
                <Row>{message.length > 0 ? error : null}</Row>
                <Row>{this.renderform()}</Row>
                <Row>
                  <Col md={{ size: 12 }}>
                    <PaperButton
                      text="Sign Up"
                      size="lg"
                      onClick={this.handleclick}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    Have an account? <Link to="/login">Login</Link>
                  </Col>
                </Row>
              </CardBody>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
