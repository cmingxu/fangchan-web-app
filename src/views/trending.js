import React, { Component, Fragment } from "react";
import User from "../api/user";
import CircleLineChart from "../components/circleLineChart";

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = { circleNames: [] };
  }

  componentWillMount() {
    User.current_user.reload_me().then(() => {
      this.setState({ circleNames: User.current_user.favorite_circles });
    });
  }

  renderCirleLineCharts() {
    return this.state.circleNames.map(item => {
      return <CircleLineChart key={item} circleName={item}></CircleLineChart>;
    });
  }
  render() {
    return <Fragment>{this.renderCirleLineCharts()}</Fragment>;
  }
}

export default Trending;
