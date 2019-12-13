import React from "react";
import "./App.css";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import CONFIG from "./config";
import Sidebar from "./components/sidebar";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Dashboard from "./views/dashboard";
import Users from "./views/users";
import Settings from "./views/settings";
import Map from "./views/maps";
import ScrapSetting from "./views/scrap_setting";
import Trending from "./views/trending";
import SigninPage from "./pages/signin_page";
import Version from "./views/version";
import User from "./api/user";

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

  let LoggedInRoute = function({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          User.isLoggedIn() ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };

  return (
    <Router>
      <Navbar bg="warning" expand="lg">
        <Navbar.Brand href="#home">{CONFIG.brandText}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">主页</Nav.Link>
            <Nav.Link href="/setting">设置</Nav.Link>
            {/*
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
            */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="搜索" className="mr-sm-2" />
            <Button variant="outline-success">搜索</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid style={styles.container}>
        <div style={styles.sidebar}>
          <Sidebar></Sidebar>
        </div>
        <div style={styles.main}>
          <Switch>
            <LoggedInRoute
              path="/dashboard"
              component={Dashboard}
            ></LoggedInRoute>
            <LoggedInRoute path="/users" component={Users}></LoggedInRoute>
            <LoggedInRoute path="/maps" component={Map}></LoggedInRoute>
            <LoggedInRoute path="/setting" component={Settings}></LoggedInRoute>
            <LoggedInRoute path="/version" component={Version}></LoggedInRoute>
            <LoggedInRoute
              path="/scrap_setting"
              component={ScrapSetting}
            ></LoggedInRoute>
            <LoggedInRoute
              path="/trending"
              component={Trending}
            ></LoggedInRoute>
            <Route path="/login" component={SigninPage}></Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
