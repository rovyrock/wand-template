import React from "react";
import { Avatar,Card, Row, Tag } from "antd";

import { ShareAltOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

class App extends React.Component {
  render() {
    const { isAuthorized } = this.props;
    return (
      <Card
        hoverable={isAuthorized ? true : false}
        className="act-item figure"
        actions={[
          <Row justify="space-between" align="middle" className="act-item-ft">
            <div className="act-item-owner">
              <Avatar size={24} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span className="act-item-owner-name">Elynnchen</span>
            </div>
            {isAuthorized ? <div className="act-item-ctrls">
              <a className="act-item-share" href="#"><ShareAltOutlined /></a><a className="act-item-edit" href="#"><EditOutlined /></a><a className="act-item-delete" href="#"><DeleteOutlined /></a>
            </div> : <div className="act-item-ctrls">
                <a className="act-item-share" href="#"><ShareAltOutlined /></a>
              </div>}

          </Row>
        ]}
        cover={<img alt="example" className="figure-pic" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        bodyStyle={{ padding: "8px" }}
      >
        <div className="act-item-bd">
          <div className="act-item-detail">
            <Tag color="orange" className="act-item-tag">PC</Tag>
            <h3 className="act-item-title">WEGAME-掌上福利</h3>
          </div>
          <div className="act-item-extra">
            <span className="act-item-time">2020-03-18</span>
            <span className="act-item-status">已发布</span>
          </div>
        </div>
      </Card>
    );
  }
}

export default App;
