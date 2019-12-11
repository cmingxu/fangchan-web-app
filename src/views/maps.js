import React, { Component, Fragment } from "react";
import { Map } from "react-amap";
import Heatmap from "react-amap-plugin-heatmap";

class AMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let pos = { longitude: 116.191031, latitude: 39.988585 };
    const points = [
      { lng: 116.191031, lat: 39.988585, count: 10 },
      { lng: 116.389275, lat: 39.925818, count: 11 },
      { lng: 116.287444, lat: 39.810742, count: 12 },
      { lng: 116.481707, lat: 39.940089, count: 13 },
      { lng: 116.410588, lat: 39.880172, count: 14 },
      { lng: 116.394816, lat: 39.91181, count: 15 },
      { lng: 116.416002, lat: 39.952917, count: 56 }
    ];

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
    const zooms = [3, 18];
    const isHotspot = true;
    const dataSet = {
      data: points,
      max: 100
    };

    const features = ["building", "bg", "road"];
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

    return (
      <Fragment>
        <Map amapkey="2b783687b92d2f0c3ebc2020bdc29689" center={pos}>
          <Heatmap {...pluginProps} />
        </Map>
      </Fragment>
    );
  }
}

export default AMap;
