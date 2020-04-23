import React from "react";
import { Card, Row, Col, Button } from "antd";
const { Meta } = Card;
import { EditOutlined } from '@ant-design/icons';
import {
  LockOutlined
} from "@ant-design/icons";
class App extends React.Component {

  render() {
    const { isAuthorized } = this.props;
    return (
      <Card
        hoverable={isAuthorized ? true : false}
        className="organization-item"
        actions={[
          <Row justify="space-between" align="middle" className="organization-item-ft">
            <span className="organization-item-owner">负责人：Elynnchen</span>
            {isAuthorized
              ?
              <EditOutlined />
              : <Button type="primary" size="small" onClick={() => console.log('申请权限')}>
                申请权限
              </Button>
            }
          </Row>
        ]}
        cover={<img alt="example" className="organization-item-pic" src="/img/plat-logo.png" />}
      >
        <div className="organization-item-content">
          <h3 className="organization-item-title">P&P design设计中心</h3>
          <p className="organization-item-des">负责发行线体系平台，Wegame，掌上英雄联盟等项目</p>
        </div>
      </Card>
    );
  }
}

export default App;
