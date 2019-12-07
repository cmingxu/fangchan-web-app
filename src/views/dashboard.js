import React, { Component, Fragment } from "react";
import Figure from "../components/figure";
import { Row, Col } from "react-bootstrap";
import LineChart from "../components/lineChart";
import Separator from "../components/seperator";
import HTTPApi from "../api/httpApi";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }
  componentDidMount() {
    // HTTPApi.getHouses({}).then(houses => {
    //   this.setState({
    //     houses: houses
    //   });
    // });
  }
  render() {
    return (
      <Fragment>
        <Separator title="重点区域价格"></Separator>
        <Row>
          <Col md="3">
            <Figure
              title="望京商圈"
              text="2013-22-10日北京市场平均价格"
              figure={123410.1}
            ></Figure>
          </Col>

          <Col md="3">
            <Figure
              title="中关村商圈"
              text="2013-22-10日北京市场平均价格"
              figure={123410.1}
            ></Figure>
          </Col>

          <Col md="3">
            <Figure
              title="三里屯商圈"
              text="2013-22-10日北京市场平均价格"
              figure={123410.1}
              headerBgClass="bg-primary"
            ></Figure>
          </Col>

          <Col md="3">
            <Figure
              title="大望路地铁"
              text="2013-22-10日北京市场平均价格"
              figure={123410.1}
            ></Figure>
          </Col>
        </Row>

        <Separator title="我关注的楼盘"></Separator>
        <Row>
          <Col md="3">
            <Figure
              title="中钢大厦"
              text="2013-22-10日北京市场平均价格"
              figure={123410.1}
            ></Figure>
          </Col>

          <Col md="3">
            <Figure
              title="国贸三期"
              text="2013-22-10日北京市场平均价格"
              figure={123410.1}
            ></Figure>
          </Col>

          <Col md="3">
            <Figure
              title="北辰世纪广场"
              text="2013-22-10日北京市场平均价格"
              figure={123410.1}
              headerBgClass="bg-danger"
            ></Figure>
          </Col>

          <Col md="3">
            <Figure
              title="向阳里小学"
              text="2013-22-10日北京市场平均价格"
              figure={123410.1}
            ></Figure>
          </Col>
        </Row>
        <Separator title="北京写字楼价格趋势"></Separator>
        <div style={{ height: "280px" }}>
          <LineChart></LineChart>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
