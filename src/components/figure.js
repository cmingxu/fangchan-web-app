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
          {this.state.avg_price_per_day} / 天
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
  avg_price_per_day: PropTypes.number,
  total_count: PropTypes.number,
  total_squre: PropTypes.number,
  headerBgClass: PropTypes.string
};

export default Figure;
