import React, { Component, Fragment } from "react";
import Figure from "../components/figure";
import { Row, Col } from "react-bootstrap";
import LineChart from "../components/lineChart";
import Separator from "../components/seperator";
import Building from "../api/buildings";
import Circles from "../api/circles";
import Region from "../api/regions";
import City from "../api/cities";
import User from "../api/user";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingStats: [],
      regionStats: [],
      circleStats: [],
      cityStats: [],
      city_name: "",
      data: [
        {
          color: "hsl(0, 70%, 50%)",
          id: "undefined",
          data: []
        }
      ]
    };
  }
  componentWillMount() {
    User.current_user
      .reload_me()
      .then(() => {
        this.setState({ city_name: User.current_user.city_name });
        let data_0 = this.state.data[0];
        data_0.id = User.current_user.city_name;
        this.setState({ data: [data_0] });
      })
      .then(() => {
        City.trendings(User.current_user.city_identity).then(res => {
          let data_0 = this.state.data[0];
          data_0.data = res.map(item => {
            let y = 0;
            try {
              y = parseFloat(item.avg_price_per_day);
            } catch (e) {
              y = 0;
            }
            return {
              x: item.begin_date,
              y: y
            };
          });
          this.setState({ data: [data_0] });
          console.log(this.state);
        });
      });
    Building.favorite_stats().then(res => {
      this.setState({ buildingStats: res ? res : [] });
    });

    Circles.favorite_stats().then(res => {
      this.setState({ circleStats: res ? res : [] });
    });

    Region.favorite_stats().then(res => {
      this.setState({ regionStats: res ? res : [] });
    });

    City.stats({}).then(res => {
      this.setState({ cityStats: res ? res : [] });
    });
  }
  renderBuildings() {
    return this.state.buildingStats.map((stats, idx) => {
      let text = `出租总套数${stats.total_count}, 总面积${stats.total_square}平方米`;
      return (
        <Col md="3" lg="2">
          <Figure
            key={idx}
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
        <Col md="3" lg="2" key={stats.name}>
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

  renderRegions() {
    return this.state.regionStats.map(stats => {
      let text = `出租总套数${stats.total_count}, 总面积${stats.total_square}平方米`;
      return (
        <Col md="3" lg="2" key={stats.name}>
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

  renderCities() {
    return this.state.cityStats.map(stats => {
      let text = `出租总套数${stats.total_count}, 总面积${stats.total_square}平方米`;
      return (
        <Col md="3" lg="2" key={stats.name}>
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

  render() {
    let title = `${this.state.city_name}写字楼价格趋势`;
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

        <Separator title={title}></Separator>
        <div style={{ height: "280px" }}>
          <LineChart data={this.state.data} legend={title}></LineChart>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
