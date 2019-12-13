import React, { Component, Fragment } from "react";

import { Card } from "react-bootstrap";
import CONFIG from "../config";

class Version extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Card className="text-center">
          <Card.Header>当前版本： {CONFIG.version}</Card.Header>
          <Card.Body>
            <Card.Title>专业写字楼出租信息数据统计</Card.Title>
            <Card.Text>
              覆盖全国重点区域  ̇ 及时准确的出租信息  ̇ 多维度信息展示
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">@乐软物业</Card.Footer>
        </Card>
      </Fragment>
    );
  }
}

export default Version;
