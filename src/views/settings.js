import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Building from "../api/buildings";
import Circle from "../api/circles";
import Region from "../api/regions";
import User from "../api/user";
import Favorite from "../components/favorite";

class Settings extends Component {
  state = {
    selectedBuildingVo: null,
    availableBuildings: [],

    selectedCircleVo: null,
    availableCircles: [],

    selectedRegionVo: null,
    availableRegions: []
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let formatVo = list => {
      return list.map(name => {
        return { label: name, value: name };
      });
    };
    User.current_user.reload_me().then(() => {
      this.setState({
        selectedBuildingVo: formatVo(User.current_user.favorite_buildings),
        selectedCircleVo: formatVo(User.current_user.favorite_circles),
        selectedRegionVo: formatVo(User.current_user.favorite_regions)
      });
    });
  }

  onBuildingInputChange = value => {
    if (value.length > 1) {
      let option = { query: { q: value } };
      Building.search(option).then(res => {
        let options = res.map(building => {
          return {
            value: building.building_name,
            label: building.building_name
          };
        });

        this.setState({ availableBuildings: options });
      });
    }
  };

  onBuildingChange = selectedOption => {
    let normalizedOption = selectedOption ? selectedOption : [];
    this.setState({ selectedBuildingVo: normalizedOption });
    let favorite_building_names = normalizedOption.map(option => {
      return option.value;
    });
    User.current_user.update_favorite_buildings(favorite_building_names);
  };

  onCircleInputChange = value => {
    if (value.length > 1) {
      let option = { query: { q: value } };
      Circle.search(option).then(res => {
        let options = res.map(circle => {
          return {
            value: circle.name,
            label: circle.name
          };
        });
        this.setState({ availableCircles: options });
      });
    }
  };

  onCircleChange = selectedOption => {
    let normalizedOption = selectedOption ? selectedOption : [];
    this.setState({ selectedCircleVo: normalizedOption });
    let favorite_circle_names = normalizedOption.map(option => {
      return option.value;
    });
    User.current_user.update_favorite_circles(favorite_circle_names);
  };

  onRegionInputChange = value => {
    if (value.length > 1) {
      let option = { query: { q: value } };
      Region.search(option).then(res => {
        let options = res.map(circle => {
          return {
            value: circle.name,
            label: circle.name
          };
        });
        this.setState({ availableRegions: options });
      });
    }
  };

  onRegionChange = selectedOption => {
    let normalizedOption = selectedOption ? selectedOption : [];
    this.setState({ selectedRegionVo: normalizedOption });
    let favorite_region_names = normalizedOption.map(option => {
      return option.value;
    });
    User.current_user.update_favorite_regions(favorite_region_names);
  };

  render() {
    const { selectedCircleVo, availableCircles } = this.state;
    const { selectedRegionVo, availableRegions } = this.state;

    return (
      <div>
        <Row>
          <Col>
            <Favorite
              isMulti={true}
              isSearchable={true}
              icon={faHeart}
              title="我关注的楼盘"
              onChange={this.onBuildingChange}
              onInputChange={this.onBuildingInputChange}
              value={this.state.selectedBuildingVo}
              options={this.state.availableBuildings}
            ></Favorite>
          </Col>
        </Row>

        <Row>
          <Col>
            <Favorite
              isMulti={true}
              isSearchable={true}
              icon={faHeart}
              title="我关注的热点区域"
              onChange={this.onCircleChange}
              onInputChange={this.onCircleInputChange}
              value={selectedCircleVo}
              options={availableCircles}
            ></Favorite>
          </Col>
        </Row>

        <Row>
          <Col>
            <Favorite
              isMulti={true}
              isSearchable={true}
              icon={faHeart}
              title="我关注的地区"
              onChange={this.onRegionChange}
              onInputChange={this.onRegionInputChange}
              value={selectedRegionVo}
              options={availableRegions}
            ></Favorite>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Settings;
