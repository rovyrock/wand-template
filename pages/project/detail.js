import React from "react";
import { Button, List, Row, Col, Tag, Pagination, Input, Breadcrumb, Descriptions, Avatar } from "antd";
import { FormOutlined } from '@ant-design/icons';
import ActItem from "@/act-item";
import PageWrapper from "@/pageWrapper"
import ModalActCreate from "@/modal-act-create"

import "assets/less/project.less";
import "assets/less/act.less";

class App extends React.Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  onHandleOk = (value) => {
    this.setState({
      visible: value
    });
  }
  onHandleCancel = (value) => {
    this.setState({
      visible: value
    });
  }
  createProject = () => {
    console.log("点击了创建项目");
  };
  render() {
    const data = [
      {
        title: "Title 1",
      },
      {
        title: "Title 2",
      },
      {
        title: "Title 3",
      },
      {
        title: "Title 4",
      },
      {
        title: "Title 5",
      },
      {
        title: "Title 6",
      },
      {
        title: "Title 7",
      },
      {
        title: "Title 8",
      },
      {
        title: "Title 9",
      },
      {
        title: "Title 10",
      },
      {
        title: "Title 11",
      },
      {
        title: "Title 12",
      },
    ];
    const { visible } = this.state;
    return (
      <PageWrapper defaultSelectedKeys={["1"]}>
        <div className="project-detail">
          <Row align="middle">
            <Breadcrumb>
              <Breadcrumb.Item><a href="">项目列表</a></Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">项目详情</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <Row justify="space-between" align="middle" className="project-detail-hd">
            <Col span={12}>
              <h3 className="project-detail-title">WeGame项目</h3>
            </Col>
          </Row>
          <Row justify="space-between" align="middle" className="project-detail-subhd">
            <Col span={12}>
              <h4 className="project-detail-subtitle">项目概览</h4>
            </Col>
            <Col>
              <Button type="link" className="project-detail-edit-button" icon={<FormOutlined />} href="/project/create">
                编辑
            </Button>
            </Col>
          </Row>
          <div className="project-overview">
            <Row justify="start">
              <Col flex="105px">
                <Avatar size={80} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Col>
              <Col span={21}>
                <Descriptions size="middle" column={2}>
                  <Descriptions.Item label="项目名称"><span className="project-overview-item-text">WeGame项目</span></Descriptions.Item>
                  <Descriptions.Item label="项目负责人"><span className="project-overview-item-text">kerwinzhang</span></Descriptions.Item>
                  <Descriptions.Item label={<label className="project-overview-label">项目英文名</label>}><span className="project-overview-item-text">Wegame</span></Descriptions.Item>
                  <Descriptions.Item label="创建时间"><span className="project-overview-item-text">2020-01-14 15:10:42</span></Descriptions.Item>
                  <Descriptions.Item label="项目简介"><span className="project-overview-item-text">发行一组相关的活动</span></Descriptions.Item>
                  <Descriptions.Item label="URL目录"><span className="project-overview-item-text">https : //act.wegame.com.cn/wand/danji/</span></Descriptions.Item>
                  <Descriptions.Item label="参与人" span={2}><span className="project-overview-item-text">tonizhao(赵冲),v_ypanxu(许祎璠),v_weiyaoli(李威嶢),v_gymguo(郭英明),vincenteli(李奕彪)</span></Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>

          </div>
          <Row justify="space-between" align="middle" className="project-detail-subhd">
            <Col span={12}>
              <h4 className="project-detail-subtitle">活动列表</h4>
            </Col>
            <Col>
              <Button type="primary" onClick={this.showModal}>
                创建活动
            </Button>
            </Col>
          </Row>
          <div className="project-detail-bd">
            <List
              grid={{
                gutter: 34,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 4,
                xxl: 5,
              }}
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <ActItem isAuthorized={index % 2 === 0 ? true : false}></ActItem>
                </List.Item>
              )}
            />
            <Row justify="center" align="middle">
              <Pagination defaultCurrent={1} total={50} />
            </Row>
          </div>

        </div>
        <ModalActCreate visible={visible} onHandleOk={this.onHandleOk} onHandleCancel={this.onHandleCancel}></ModalActCreate>
      </PageWrapper>
    );
  }
}

export default App;
