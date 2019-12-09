import React, { Component, Fragment } from "react";
import Figure from "../components/figure";
import { Row, Col } from "react-bootstrap";
import LineChart from "../components/lineChart";
import Separator from "../components/seperator";
import Building from "../api/buildings";
import Circles from "../api/circles";
import Region from "../api/regions";
import City from "../api/cities";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingStats: [],
      regionStats: [],
      circleStats: [],
      cityStats: []
    };
  }
  componentDidMount() {
    Building.favorite_stats().then(res => {
      this.setState({ buildingStats: res });
    });

    Circles.favorite_stats().then(res => {
      this.setState({ circleStats: res });
    });

    Region.favorite_stats().then(res => {
      this.setState({ regionStats: res });
    });

    City.stats({}).then(res => {
      this.setState({ cityStats: res });
    });
  }
  renderBuildings() {
    return this.state.buildingStats.map(stats => {
      let text = `出租总套数${stats.total_count}, 总面积${stats.total_square}平方米`;
      return (
        <Col md="3" lg="2">
          <Figure
            key={stats.name}
            title={stats.name}
            text={text}
            avg_price_per_day={stats.avg_price_per_day}
            total_count={stats.total_count}
            total_square={stats.total_square}
          ></Figure>
        </Col>
      );
    });
  }
  renderCircles() {
    return this.state.circleStats.map(stats => {
      let text = `出租总套数${stats.total_count}, 总面积${stats.total_square}平方米`;
      return (
        <Col md="3" lg="2">
          <Figure
            title={stats.name}
            text={text}
            avg_price_per_day={stats.avg_price_per_day}
            total_count={stats.total_count}
            total_square={stats.total_square}
          ></Figure>
        </Col>
      );
    });
  }

  renderRegions() {
    return this.state.regionStats.map(stats => {
      let text = `出租总套数${stats.total_count}, 总面积${stats.total_square}平方米`;
      return (
        <Col md="3" lg="2">
          <Figure
            title={stats.name}
            text={text}
            avg_price_per_day={stats.avg_price_per_day}
            total_count={stats.total_count}
            total_square={stats.total_square}
          ></Figure>
        </Col>
      );
    });
  }

  renderCities() {
    return this.state.cityStats.map(stats => {
      let text = `出租总套数${stats.total_count}, 总面积${stats.total_square}平方米`;
      return (
        <Col md="3" lg="2">
          <Figure
            title={stats.name}
            text={text}
            avg_price_per_day={stats.avg_price_per_day}
            total_count={stats.total_count}
            total_square={stats.total_square}
          ></Figure>
        </Col>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <Separator title="全国主要城市"></Separator>
        <Row>{this.renderCities()}</Row>

        <Separator title="我关注的楼盘"></Separator>
        <Row>{this.renderBuildings()}</Row>

        <Separator title="我关注的热点区域"></Separator>
        <Row> {this.renderCircles()}</Row>

        <Separator title="我关注的县市"></Separator>
        <Row> {this.renderRegions()}</Row>

        <Separator title="北京写字楼价格趋势"></Separator>
        <div style={{ height: "280px" }}>
          <LineChart></LineChart>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
