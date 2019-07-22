import React, { Component, Fragment } from "react";
import Seperator from "../components/seperator";
import { Table, ProgressBar, Button, Form } from "react-bootstrap";

class ScrapSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrabTasks: [
        {
          name: "搜房网定时",
          total: 1000,
          current: 532,
          beginAt: new Date(),
          proxy: true,
          variant: "primary"
        },

        {
          name: "新浪房产定时",
          total: 1000,
          current: 222,
          beginAt: new Date(),
          proxy: true,
          variant: "warning"
        },

        {
          name: "搜狐焦点定时",
          total: 1000,
          current: 992,
          beginAt: new Date(),
          proxy: true,
          variant: "danger"
        },
        {
          name: "链家网App定时",
          total: 600,
          current: 532,
          beginAt: new Date(),
          proxy: true,
          variant: "primary"
        },
        {
          name: "58同城定时",
          total: 3000,
          current: 532,
          beginAt: new Date(),
          proxy: true,
          variant: "default"
        }
      ],
      scrabData: [
        {
          region: "望京",
          source: "soufang.com",
          name: "望京SOHO",
          price: 12,
          taskId: "oeewqwec",
          time: new Date()
        },

        {
          region: "中关村",
          source: "lianjia.com",
          name: "新中关",
          price: 22,
          taskId: "oeewqwec",
          time: new Date()
        },

        {
          region: "望京",
          source: "58.com",
          name: "港旅大厦",
          price: 22,
          taskId: "oeewqwec",
          time: new Date()
        },

        {
          region: "望京",
          source: "soufang.com",
          name: "奔驰大厦",
          price: 12,
          taskId: "oeewqwec",
          time: new Date()
        },
        {
          region: "望京",
          source: "lianjia.com",
          name: "望京大厦",
          price: 12,
          taskId: "oeewqwec",
          time: new Date()
        },
        {
          region: "望京",
          source: "lianjia.com",
          name: "浦项中心",
          price: 12,
          taskId: "oeewqwec",
          time: new Date()
        },
        {
          region: "望京",
          source: "58.com",
          name: "绿地中心",
          price: 30,
          taskId: "oeewqwec",
          time: new Date()
        },
        {
          region: "望京",
          source: "soufang.com",
          name: "望京SOHO",
          price: 12,
          taskId: "oeewqwec",
          time: new Date()
        },
        {
          region: "望京",
          source: "58.com",
          name: "望京SOHO",
          price: 12,
          taskId: "oeewqwec",
          time: new Date()
        }
      ]
    };
  }

  renderTask(task) {
    return (
      <tr>
        <td size="sm">{task.name}</td>
        <td>
          <ProgressBar
            now={Math.floor((task.current / task.total) * 100)}
            variant={task.variant}
            label={`${task.current} / ${task.total}`}
          />
        </td>
        <td>
          <Button size="sm">取消</Button>
        </td>
      </tr>
    );
  }

  renderData(data) {
    return (
      <tr>
        <td size="sm">{data.name}</td>
        <td>{data.region}</td>
        <td>{data.price}</td>
        <td>{data.source}</td>
        <td>一小时前</td>
        <td>{data.taskId}</td>
      </tr>
    );
  }

  render() {
    return (
      <Fragment>
        <Seperator title="抓取任务"></Seperator>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>时间</Form.Label>
            <Form.Control as="select">
              <option>中午</option>
              <option>晚上</option>
              <option>夜间23点</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>来源</Form.Label>
            <Form.Control as="select">
              <option>搜房</option>
              <option>搜狐房产</option>
              <option>新浪房产</option>
              <option>58.com</option>
              <option>lianjia.com</option>
              <option>fangtianxia.com</option>
            </Form.Control>
          </Form.Group>

          <Button size="md">创建抓取任务</Button>
        </Form>
        <Seperator title="抓取任务(5)"></Seperator>
        <Table striped bordered hover size="sm">
          <thead>
            <th>称呼</th>
            <th>进度</th>
            <th></th>
          </thead>

          <tbody>
            {this.state.scrabTasks.map(task => {
              return this.renderTask(task);
            })}
          </tbody>
        </Table>

        <Seperator title="抓取数据Sample"></Seperator>
        <Table striped bordered hover size="sm">
          <thead>
            <th>楼盘</th>
            <th>区域</th>
            <th>价格</th>
            <th>数据来源</th>
            <th>抓取时间</th>
            <th>抓取任务</th>
          </thead>

          <tbody>
            {this.state.scrabData.map(data => {
              return this.renderData(data);
            })}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default ScrapSetting;
