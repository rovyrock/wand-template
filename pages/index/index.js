
import Link from 'next/link'
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Button, Row } from 'antd';

class Index extends Component{
  // static propTypes = {
  //   className: PropTypes.string,
  //   defaultSelectedKeys: PropTypes.Array,
  // };
  static defaultProps = {
    className: 'admin-layout-content--home',
    defaultSelectedKeys: ["0"]
  };
  constructor(props) {
    super(props);
  }

  render(){
      return(
        <Fragment>
          <main className="home">
            <Row className="home-brand">
              <img src="/static/brand.png" className="home-brand-img"></img>
            </Row>
            <Row >
              <div className="home-intro">
                <h1 className="home-title">一站式运营营销系统</h1>
                <p className="home-desc">魔法棒是发行平台体系下一站式运营平台系统。产品，开发通过简单配置，可视化拖拽组件搭建页面，一键快速发布外网。有效减少生产周期，提升运营产能。目前支持PC端与移动端。</p>
                <div className="home-ctrls">
                  <Button type="primary" className="home-ctrls-item home-ctrls-permission">权限申请</Button>
                  <Button className="home-ctrls-item home-ctrls-guide"><Link href="/"><a>操作指引</a></Link></Button>
                </div>
              </div>
            </Row>
          </main>
          <style global jsx>{`
          `}</style>
        </Fragment>
      )
  }
}


export default Index