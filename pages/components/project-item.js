import React from "react";
import { Card, Avatar, Button, Row, Col } from "antd";
const { Meta } = Card;
import Link from "./routerLink";
import {
  LockOutlined, EditOutlined, DeleteOutlined
} from "@ant-design/icons";
class App extends React.Component {
  render() {
    const { isAuthorized } = this.props;
    return (
      <Card
        hoverable={isAuthorized ? true : false}
        className="project-item"
        actions={[
          <Row justify="space-between" align="middle" className="project-item-ft">
            <span className="project-item-owner">负责人：Elynnchen</span>

            {isAuthorized
              ? <div className="project-item-ft-ctrls"><Link><a className="project-item-edit"><EditOutlined /></a></Link><a href="#" className="project-item-delete"><DeleteOutlined /></a></div>
              : <Button type="primary" size="small" onClick={() => console.log('申请权限')}>
                申请权限
              </Button>
            }
          </Row>
        ]}
      >
        <Meta
          avatar={
            <Avatar
              size={80}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          }
          title={
            <h3 className="project-item-title">项目标题项目标题项目标题</h3>
          }
          description={
            <div className="project-item-detail">
              <p className="project-item-desc">
                这是一段项目简介这是一段项目简介这是一段项目简介这是一段项目简介这是一段项目简介这是一段项目简介
              </p>
              <p className="project-item-extra">
                最新活动：
                <a href="" className="project-item-latestact">
                  一条项目最新的活动
                </a>
              </p>
              {isAuthorized ? null : <span className="project-item-lock"><LockOutlined key="lock" className="project-item-lock-icon" /></span>}
            </div>
          }
        />
      </Card>
    );
  }
}

export default App;
