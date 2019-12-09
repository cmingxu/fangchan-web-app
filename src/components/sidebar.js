import { Component } from "react";
import { Nav } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUsers,
  faCogs,
  faCodeBranch,
  faBlog,
  faHome
} from "@fortawesome/free-solid-svg-icons";

export default class Sidebar extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/dashboard" className="flex-column">
        <Nav.Link eventKey="disabled" disabled>
          功能
        </Nav.Link>
        <Nav.Link eventKey="link-0" href="/dashboard">
          <FontAwesomeIcon icon={faHome} />
          &nbsp; 我的主页
        </Nav.Link>
        <Nav.Link eventKey="link-1" href="/trending">
          <FontAwesomeIcon icon={faChartLine} />
          &nbsp; 价格趋势
        </Nav.Link>
        <Nav.Link eventKey="link-2" href="/maps">
          <FontAwesomeIcon icon={faBlog} />
          &nbsp; 地图展示
        </Nav.Link>
        {/* 
        <Nav.Link eventKey="link-2" href="/users">
          <FontAwesomeIcon icon={faUsers} />
          &nbsp; 用户&通知
        </Nav.Link>
        <Nav.Link eventKey="link-3" href="/scrap_setting">
          <FontAwesomeIcon icon={faBlog} />
          &nbsp; 抓取程序
        </Nav.Link>
        */}
        <Nav.Link eventKey="disabled" disabled>
          其他
        </Nav.Link>
        <Nav.Link href="/setting">
          <FontAwesomeIcon icon={faCogs} />
          &nbsp; 设置
        </Nav.Link>
        <Nav.Link eventKey="link-4" href="/version">
          <FontAwesomeIcon icon={faCodeBranch} />
          &nbsp; 版本
        </Nav.Link>
      </Nav>
    );
  }
}
