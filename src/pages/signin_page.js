import React, { Component } from "react";
import { Button } from "react-bootstrap";

class SigninPage extends Component {
  signinUser() {
    console.log("sign");
  }
  render() {
    this.signinUser.bind(this);
    return <Button size="md">登录</Button>;
  }
}

export default SigninPage;
