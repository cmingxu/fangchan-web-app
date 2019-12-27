import React, { Component, Fragment } from "react";
import LineChart from "./lineChart";
import Separator from "../components/seperator";
import styled from "styled-components";
import Circle from "../api/circles";

const LinechartContainer = styled.div`
  height: 200px;
`;
class CircleLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = { circleName: props.circleName, data: [] };
  }

  componentWillMount() {
    Circle.trendings(this.state.circleName).then(res => {
      let data = res.map(item => {
        return { x: item.begin_date, y: parseFloat(item.avg_price_per_day) };
      });
      this.setState({
        data: this.state.data.push({
          id: this.state.circleName,
          color: "hsl(0, 70%, 50%)",
          data: data
        })
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Separator title={this.state.circleName}></Separator>
        <LinechartContainer>
          <LineChart
            data={this.state.data}
            legend={this.state.circleName}
          ></LineChart>
        </LinechartContainer>
      </Fragment>
    );
  }
}

export default CircleLineChart;
