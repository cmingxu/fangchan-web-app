import React, { Component } from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYenSign } from "@fortawesome/free-solid-svg-icons";

class Figure extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return (
      <Card>
        <Card.Header as="h3" className={this.props.headerBgClass}>
          {20 + Math.floor(Math.random() * 20 - 10)} / 小时
          <FontAwesomeIcon
            icon={faYenSign}
            size="sm"
            pull="right"
          ></FontAwesomeIcon>
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Text> {this.state.text} </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

Figure.defaultProps = {
  headerBgClass: "bg-default"
};

Figure.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  figure: PropTypes.number,
  headerBgClass: PropTypes.string
};

export default Figure;
