

import React, {Component} from 'react';
import ModalOrganizationApply from "@/modal-organization-apply"
import { Button, Row } from 'antd';
import getConfig from 'next/config'
const { linkPrefix } = getConfig().publicRuntimeConfig;

class Index extends Component{

  constructor(props) {
    super(props);
  }
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  onHandleOk = (value) =>{
    this.setState({
      visible: value
    });
  }
  onHandleCancel = (value) =>{
    this.setState({
      visible: value
    });
  }

  render(){
    const {visible} = this.state;
      return(
          <main className="home">
            <Row className="home-brand">
              <img src={`${linkPrefix}/static/brand.png`} className="home-brand-img"></img>
            </Row>
            <Row >
              <div className="home-intro">
                <h1 className="home-title">一站式运营营销系统</h1>
                <p className="home-desc">魔法棒是发行平台体系下一站式运营平台系统。产品，开发通过简单配置，可视化拖拽组件搭建页面，一键快速发布外网。有效减少生产周期，提升运营产能。目前支持PC端与移动端。</p>
                <div className="home-ctrls">
                  <Button type="primary" className="home-ctrls-item home-ctrls-permission" onClick={this.showModal}>权限申请</Button>
                  <Button className="home-ctrls-item home-ctrls-guide" href="/guide">操作指引</Button>
                </div>
              </div>
            </Row>
            <ModalOrganizationApply visible={visible} onHandleOk={this.onHandleOk} onHandleCancel={this.onHandleCancel}></ModalOrganizationApply>
          </main>
      )
  }
}


export default Index