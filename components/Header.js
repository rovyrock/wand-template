import Head from './Head'
import Link from "./routerLink";
import React, {Component, Fragment} from 'react'
import Router, {withRouter} from 'next/router'
import NProgress from 'nprogress'
import { connect } from 'react-redux';
import getConfig from 'next/config'
const { linkPrefix } = getConfig().publicRuntimeConfig;

import { Avatar,Col,Divider,Dropdown,Layout, Menu, Row} from "antd";

const { Header } = Layout;

import {toggleDispatch, hideDispatch} from '../store/redux/menu-redux'

@withRouter

@connect(
	state => state.SideReducer,
	{toggleDispatch, hideDispatch}
)

class HeaderBar extends Component{

  toggleSide(){
    this.props.toggleDispatch()
  }

  progress(){
    //进度条
    Router.onRouteChangeStart = (url) => NProgress.start()
    Router.onRouteChangeComplete = () =>  {
        this.props.hideDispatch();
        NProgress.done();
    }
    Router.onRouteChangeError = () => NProgress.done()
  }

  render(){
    this.progress();
    const {pathname} = this.props.router;
    const menuPath = ['/project/list', '/act/list'];
    const {defaultSelectedKeys} = this.props;
    const menu = (
      <Menu theme="light">
        <Menu.Item key="0">
          <Link href="/organization/list">组织管理</Link>
        </Menu.Item>
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    );
    return  (
      <Fragment>
        <Head />
        <Header theme="light" className="header admin-layout-header">
        <div className="header-main">
          <div className="header-logo">
              <Link href="/">
                  <a><img src={`${linkPrefix}/static/logo@2x.png`} className="header-logo-img"/></a>
              </Link>
          </div>
          <div className="header-nav-main">
              <Menu theme="light" mode="horizontal" defaultSelectedKeys={defaultSelectedKeys}>
                <Menu.Item key="1">
                  <Link href="/project/list"><a className={menuPath.indexOf(pathname)>-1 ? 'link-active':''}>项目</a></Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href="/act/list"><a className={menuPath.indexOf(pathname)>-1 ? 'link-active':''}>活动</a></Link>
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
      </Fragment>
    )
  }
}

export default HeaderBar