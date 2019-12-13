import React, { Component } from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: props.selectedOption, option: props.option };
  }
  render() {
    const { onChange, onInputChange, title, icon, ...rest } = this.props;

    return (
      <Card className="w-100 m-1">
        <Card.Header as="p" className={"bg-default"}>
          {title}
          <FontAwesomeIcon icon={icon} size="sm" pull="right"></FontAwesomeIcon>
        </Card.Header>
        <Card.Body>
          <Select {...rest} onChange={onChange} onInputChange={onInputChange} />
        </Card.Body>
      </Card>
    );
  }
}

Favorite.propTypes = {
  handleChange: PropTypes.func,
  handleInputValue: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.object
};

export default Favorite;
