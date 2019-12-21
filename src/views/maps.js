import React, { Component, Fragment } from "react";
import { Map, Marker } from "react-amap";
import { Col, Row, Table } from "react-bootstrap";
import Circle from "../api/circles";
import Building from "../api/buildings";

const defaultPosition = { longitude: 116.418261, latitude: 39.921984 };
class AMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [],
      current_page: 0,
      center: defaultPosition,
      currentCircleBuildings: []
    };
  }

  componentWillMount() {
    Circle.stats({ query: { per_page: 400 } }).then(res => {
      this.setState({ circles: res });
    });
  }

  redrawMap(circle_name) {
    Building.list({ query: { "q[circle_name_eq]": circle_name } })
      .then(res => {
        this.setState({ currentCircleBuildings: res });
      })
      .then(res => {
        let centerBuilding = this.state.currentCircleBuildings.find(
          building => {
            return building.latitude !== null && building.longitude !== null;
          }
        );

        if (centerBuilding === null || centerBuilding === undefined) {
          centerBuilding = defaultPosition;
        }
        this.setState({
          center: {
            latitude: centerBuilding.latitude,
            longitude: centerBuilding.longitude
          }
        });
      });
  }

  renderBuildingMarkers() {
    return this.state.currentCircleBuildings
      .filter(building => {
        return building.latitude !== null && building.longitude !== null;
      })
      .map(building => {
        let position = {
          longitude: parseFloat(building.longitude),
          latitude: parseFloat(building.latitude)
        };
        return (
          <Marker
            key={position.latitude}
            visible={true}
            position={position}
          ></Marker>
        );
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
    const { center } = this.state;
    const zoom = 13;

    const mapProps = {
      zoom
    };

    const styles = {
      scrollY: {
        overflowY: "scroll"
      }
    };

    return (
      <Fragment>
        <Row>
          <Col md="4" style={styles.scrollY} className="vh-100">
            <Table striped bordered hover size="sm" style={styles.scrollY}>
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
            <Map
              amapkey="2b783687b92d2f0c3ebc2020bdc29689"
              center={center}
              {...mapProps}
            >
              {this.renderBuildingMarkers()}
            </Map>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default AMap;
