import React from "react";
import { Layout, Menu, Divider, Avatar, Dropdown, Row, Col } from "antd";

const { Header } = Layout;
import Link from "./routerLink";

class App extends React.Component {
  render() {
    const menu = (
      <Menu theme="light">
        <Menu.Item key="0">
          <Link href="/organization/list">组织管理</Link>
        </Menu.Item>
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    );
    const { defaultSelectedKeys=["1"] } = this.props;
    return (
      <Header theme="light" className="header admin-layout-header">
        <div className="header-main">
          <div className="header-logo">
            <Link href="/">
              <img className="header-logo-img" src="/img/logo@2x.png" />
            </Link>
          </div>
          <div className="header-nav-main">
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={defaultSelectedKeys}>
              <Menu.Item key="1">
                <Link href="/project/list">项目</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link href="/act/list">活动</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>

        <Row
          justify="end"
          align="middle"
          className="header-nav-aside"
          gutter={[32]}
        >
          <Col className="header-nav-aside-group">
            <Link href="/guide">使用文档</Link>
            <Divider type="vertical" />
            <Link href="/contact">联系我们</Link>
          </Col>
          {/* <Col className="header-nav-aside-group">
            <Link href="/group">
              <svg
                className="header-nav-aside-add"
                viewBox="0 0 12 12"
                focusable="false"
                class=""
                data-icon="plus"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M198,204a.6.6,0,0,0,.6-.6v-4.8h4.8a.6.6,0,1,0,0-1.2h-4.8v-4.8a.6.6,0,0,0-1.2,0v4.8h-4.8a.6.6,0,0,0,0,1.2h4.8v4.8a.6.6,0,0,0,.6.6"
                  transform="translate(-192 -192)"
                ></path>
              </svg>
              组织管理
            </Link>
          </Col> */}

          <Dropdown
            overlay={menu}
            placement="bottomRight"
            overlayStyle={{ width: "120px",minWidth:'120px' }}
          >
            <Col className="header-user">
              <span className="header-user-name">
                Elynnchen（陈红凌）
                <svg
                  viewBox="0 0 12 12"
                  focusable="false"
                  className=""
                  data-icon="down"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M15.617,8.027l-5.226,5.226L5.236,8.1l-.809.8,5.155,5.155.809.809.809-.809,5.226-5.226Z"
                    transform="translate(-4.426 -5.443)"
                  ></path>
                </svg>
              </span>

              <div className="header-user-avatar">
                <Avatar
                  size={42}
                  src="https://gw.alipayobjects.com/zos/rmsportal/lctvVCLfRpYCkYxAsiVQ.png"
                  icon="user"
                  className="header-user-avatar-img"
                />
              </div>
            </Col>
          </Dropdown>
        </Row>
      </Header>
    );
  }
}

export default App;
