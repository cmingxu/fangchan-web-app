import React, { Component, Fragment } from "react";
import { Map } from "react-amap";
import { Col, Row, Table } from "react-bootstrap";
import Heatmap from "react-amap-plugin-heatmap";
import Circle from "../api/circles";
import Building from "../api/buildings";

class AMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [],
      current_page: 0,
      center: { longitude: 116.418261, latitude: 39.921984 },
      points: [
        { lng: 116.191031, lat: 39.988585, count: 10 },
        { lng: 116.389275, lat: 39.925818, count: 11 },
        { lng: 116.287444, lat: 39.810742, count: 12 },
        { lng: 116.481707, lat: 39.940089, count: 13 },
        { lng: 116.410588, lat: 39.880172, count: 14 },
        { lng: 116.394816, lat: 39.91181, count: 15 },
        { lng: 116.416002, lat: 39.952917, count: 56 }
      ]
    };
  }

  componentWillMount() {
    Circle.stats({ query: { per_page: 100 } }).then(res => {
      this.setState({ circles: res });
    });
  }

  redrawMap(circle_name) {
    Building.list({ query: { circle_name_eq: circle_name } }).then(res => {
      console.log(res);
    });
  }

  renderCircles() {
    const styles = {
      clickable: {
        cursor: "pointer"
      }
    };
    return this.state.circles.map(circle => {
      return (
        <tr
          key={Math.random()}
          onClick={() => {
            this.redrawMap(circle.name);
          }}
          style={styles.clickable}
        >
          <td>{circle.city_name}</td>
          <td>{circle.name}</td>
          <td>{circle.total_count}</td>
          <td>{circle.total_square}</td>
          <td className="text-right">{circle.avg_price_per_day}</td>
        </tr>
      );
    });
  }

  render() {
    const { center, points } = this.state;
    // config props
    const visible = true;
    const radius = 30;
    const gradient = {
      "0.4": "rgb(0, 255, 255)",
      "0.65": "rgb(0, 110, 255)",
      "0.85": "rgb(100, 0, 255)",
      "1.0": "rgb(100, 0, 255)"
    };
    const zoom = 16;
    const zooms = [1, 18];
    const isHotspot = true;
    const dataSet = {
      data: points,
      max: 100
    };

    const features = ["bg", "road", "building"];
    const pluginProps = {
      visible,
      radius,
      gradient,
      zooms,
      dataSet,
      zoom,
      features,
      isHotspot
    };

    const styles = {
      scrollY: {
        overflow: "auto"
      },
      fixHeight: {
        height: "1000px"
      }
    };

    return (
      <Fragment>
        <Row className="" style={styles.fixHeight}>
          <Col md="4" style={styles}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>城市</th>
                  <th>商圈</th>
                  <th>出租总数</th>
                  <th>总面积</th>
                  <th>均价</th>
                </tr>
              </thead>
              <tbody>{this.renderCircles()}</tbody>
            </Table>
          </Col>
          <Col md="8">
            <Map amapkey="2b783687b92d2f0c3ebc2020bdc29689" center={center}>
              <Heatmap {...pluginProps} />
            </Map>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default AMap;
