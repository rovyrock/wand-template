
import React, { Component } from 'react'
import { Layout } from "antd";
const { Footer } = Layout;
class FooterBar extends Component{
  render(){
    return  (
      <Footer className="admin-layout-footer">
        WeGame PC平台部运营中心 && 发行线设计中心
      </Footer>
    )
  }
}

export default FooterBar