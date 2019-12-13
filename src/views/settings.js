import React, { Component } from "react";
import Select from "react-select";
import { Row, Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYenSign } from "@fortawesome/free-solid-svg-icons";
import Building from "../api/buildings";
import User from "../api/user";
import Favorite from "../components/favorite";

class Settings extends Component {
  state = {
    selectedBuildingVo: null,
    availableBuildings: []
  };

  handleInputValue = value => {
    if (value.length > 1) {
      let option = { query: { q: value } };
      Building.search(option).then(res => {
        let options = res.map(building => {
          return {
            value: building.building_name,
            label: building.building_name
          };
        });
        this.setState({ options: options });
      });
    }
  };

  handleChange = selectedOption => {
    console.log(`Option selected:`, selectedOption);
    let normalizedOption = selectedOption ? selectedOption : [];
    this.setState({ selectedOption: normalizedOption });
    if (normalizedOption.length !== 0) {
      let favorite_building_names = normalizedOption.map(option => {
        return option.value;
      });
      console.log("favorite:", favorite_building_names);
      User.current_user.update_favorite_buildings(favorite_building_names);
    }
  };

  onBuildingInputChange = value => {
    console.log(value, "xxxxxxxxxxxxxx");
    if (value.length > 1) {
      let option = { query: { q: value } };
      Building.search(option).then(res => {
        let options = res.map(building => {
          return {
            value: building.building_name,
            label: building.building_name
          };
        });
        this.setState({ options: options });
      });
    }
  };

  onBuildingChange = selectedOption => {
    console.log(`Option selected:11111111`, selectedOption);
    let normalizedOption = selectedOption ? selectedOption : [];
    this.setState({ selectedOption: normalizedOption });
    if (normalizedOption.length !== 0) {
      let favorite_building_names = normalizedOption.map(option => {
        return option.value;
      });
      console.log("favorite:", favorite_building_names);
      User.current_user.update_favorite_buildings(favorite_building_names);
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { selectedBuildingVo: selectedOption, availableBuildings: options } = this.state;

    return (
      <div>
        <Row>
          <Col>
            <Card className="w-100">
              <Card.Header as="p" className={"bg-default"}>
                我关注的楼盘
                <FontAwesomeIcon
                  icon={faYenSign}
                  size="sm"
                  pull="right"
                ></FontAwesomeIcon>
              </Card.Header>
              <Card.Body>
                <Select
                  isMulti={true}
                  isSearchable={true}
                  value={selectedOption}
                  onChange={this.handleChange}
                  onInputChange={this.handleInputValue}
                  options={options}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Favorite
              isMulti={true}
              isSearchable={true}
              icon={faYenSign}
              title="我关注的楼盘"
              onChange={this.onBuildingChange}
              onInputChange={this.onBuildingInputChange}
              value={selectedOption}
              options={options}
            ></Favorite>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Settings;
