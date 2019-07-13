import React, { Component } from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          login: "刘德华",
          mobile: "13699123123",
          email: "liudehua@jd.com",
          dailyReport: true,
          weeklyReport: true
        },
        {
          login: "张惠妹",
          mobile: "13699123123",
          email: "zhanghuimei@jd.com",
          dailyReport: false,
          weeklyReport: true
        },
        {
          login: "范玮琪",
          mobile: "13699123123",
          email: "fanweiqi@jd.com",
          dailyReport: false,
          weeklyReport: true
        },
        {
          login: "范玮",
          mobile: "13699123123",
          email: "fanwei@jd.com",
          dailyReport: false,
          weeklyReport: false
        },
        {
          login: "爱克鲁斯",
          mobile: "13699123123",
          email: "akliusi@jd.com",
          dailyReport: false,
          weeklyReport: true
        }
      ]
    };
  }

  renderUser(user) {
    return (
      <tr>
        <td>#</td>
        <td>{user.login}</td>
        <td>{user.mobile}</td>
        <td>{user.email}</td>
        <td>{user.dailyReport}</td>
        <td>{user.weeklyReport}</td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button variant="warning">修改</Button>
            <Button variant="warning">更新</Button>
            <Button variant="warning">推荐</Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <th></th>
          <th>称呼</th>
          <th>电话</th>
          <th>Email</th>
          <th>每日消息</th>
          <th>每周消息</th>
          <th></th>
        </thead>

        <tbody>
          {this.state.users.map(user => {
            return this.renderUser(user);
          })}
        </tbody>
      </Table>
    );
  }
  
}

export default Users;
