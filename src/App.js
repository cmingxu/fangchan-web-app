import React from "react";
import "./App.css";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import CONFIG from "./config";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Users from "./views/users";
import Settings from "./views/settings";
import ScrapSetting from "./views/scrap_setting";
import Trending from "./views/trending";

function App() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      minHeight: "100vh"
    },
    sidebar: {
      width: "200px",
      minHeight: "100vh",
      flexGrow: "0",
      borderRight: "1px solid gray"
    },
    main: {
      flexGrow: "1",
      width: "100vw - 200px",
      padding: "10px"
    }
  };
  return (
    <Router>
      <Navbar bg="warning" expand="lg">
        <Navbar.Brand href="#home">{CONFIG.brandText}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">主页</Nav.Link>
            <Nav.Link href="#link">设置</Nav.Link>
            <NavDropdown title="更多" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="搜索" className="mr-sm-2" />
            <Button variant="outline-success">搜索定位</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid style={styles.container}>
        <div style={styles.sidebar}>
          <Sidebar></Sidebar>
        </div>
        <div style={styles.main}>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/setting" component={Settings}></Route>
          <Route path="/scrap_setting" component={ScrapSetting}></Route>
          <Route path="/trending" component={Trending}></Route>
        </div>
      </Container>
    </Router>
  );
}

export default App;
