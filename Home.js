import * as React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Tabs, Dropdown } from "antd";
import { UserOutlined,DashboardOutlined,UnorderedListOutlined, LoginOutlined, MonitorOutlined,
 BankOutlined, AuditOutlined,CheckCircleOutlined,NotificationOutlined, FormOutlined } from '@ant-design/icons';
import StudentSignUp from "./StudentSignUp"
import CompanySignUp from "./CompanySignUp"
import Profile from "./Profile"
import JobPostings from "./jobs/JobPostings"
import MySubmissions from "./MySubmissions"
import Placement from "./Placement"
import Companies from "./jobs/Companies"
import Annoucements from "./Announcements"
import LoginHome from "./LoginHome"
import Dashboard from "./charts/Dashboard"
import SubMenu from "antd/lib/menu/SubMenu";


const { Header, Content, Footer } = Layout;


class Home extends React.Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          

          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1" style={{}}>
                <DashboardOutlined />
                Dashboard
                <Link to="/dashboard" />
              </Menu.Item>
              <Menu.Item key="2">
                <AuditOutlined />
                Placement
                <Link to="/placement" />
              </Menu.Item>
              <Menu.Item key="3">
                <NotificationOutlined />
                Announcements <Link to="/announcements" />
              </Menu.Item>
              <Menu.Item key="4">
                <BankOutlined />
                Companies <Link to="/companies" />
              </Menu.Item>
              <Menu.Item key="5">
                <UnorderedListOutlined />
                Job Openings <Link to="/openings" />
              </Menu.Item>
              <Menu.Item key="6">
                <CheckCircleOutlined />
                My Applications <Link to="/submissions" />
              </Menu.Item>
              <Menu.Item key="7">
                {/* <FormOutlined />
                Registration  <Link to="/signup" /> */}
              </Menu.Item>
              <FormOutlined />
              <SubMenu
              title={
                <span>
                  <span>Registration</span>
                </span>
              }>
                <Menu.ItemGroup key="Registration" title="signup">
                  <Menu.Item Key="StudentSignUP"> Student SignUp <Link to="/studentsignup" /></Menu.Item>
                  <Menu.Item Key="CompanySignUP"> Company SignUp <Link to="/companysignup" /></Menu.Item>
                  </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="8">
                <LoginOutlined />
                Login  <Link to="/login" />
              </Menu.Item>
              <Menu.Item key="9" style={{ float: "right", color: "#F9E79F" }}>
                <UserOutlined />
                {localStorage.getItem("username")} <Link to="/profile" />
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: 80, minHeight: 480, display: "flex",
          justifyContent: "center",
          alignItems: "center" }}>
            <Route path="/profile" component={Profile} />
            <Route path="/studentsignup" component={StudentSignUp} />
            <Route path="/companysignup" component={CompanySignUp} />
            <Route path="/openings" component={JobPostings} />
            <Route path="/submissions" component={MySubmissions} />
            <Route path="/placement" component={Placement} />
            <Route path="/companies" component={Companies} />
            <Route path="/login" component={LoginHome} />
            <Route path="/announcements" component={Annoucements} />
            <Route path="/dashboard" component={Dashboard} />
            
          </Content>
          {/* original blue- #4285F4 */}
          <Footer
            style={{
              textAlign: "center",
              minHeight: 350,
              background: "#000000",
              color: "#4285F4"
            }}
          >
            ©2021 SHUATS Arena
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default Home;
