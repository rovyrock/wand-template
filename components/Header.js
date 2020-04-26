import Head from './Head'
import Link from 'next/link'
import React, {Component, Fragment} from 'react'
import Router, {withRouter} from 'next/router'
import NProgress from 'nprogress'
import { connect } from 'react-redux';
import getConfig from 'next/config'
const { linkPrefix } = getConfig().publicRuntimeConfig;

import { Layout, Menu, Row} from "antd";
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

        </Row>

        </Header>
      </Fragment>
    )
  }
}

export default HeaderBar