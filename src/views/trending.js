import React, { Component, Fragment } from "react";
import LineChart from "../components/lineChart";
import styled from "styled-components";
import Separator from "../components/seperator";

const LinechartContainer = styled.div`
  height: 400px;
`;

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Separator title="北京写字楼价格趋势"></Separator>
        <LinechartContainer>
          <LineChart> </LineChart>
        </LinechartContainer>

        <Separator title="望京商圈"></Separator>
        <LinechartContainer>
          <LineChart> </LineChart>
        </LinechartContainer>

        <Separator title="三里屯商圈"></Separator>
        <LinechartContainer>
          <LineChart> </LineChart>
        </LinechartContainer>
      </Fragment>
    );
  }
}

export default Trending;
