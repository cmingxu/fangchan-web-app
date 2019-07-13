import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

class Separator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }
  render() {
    return (
      <Fragment>
        <Row style={{ height: "40px" }}></Row>
        <h4>{this.state.title}</h4>
        <hr></hr>
      </Fragment>
    );
  }
}

Separator.propTypes = {
  title: PropTypes.string
};

export default Separator;
