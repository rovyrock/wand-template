import React from "react";
import { useRouter } from 'next/router'
import { Button, List, Row, Col, Tag, Pagination, Input } from "antd";
const { CheckableTag } = Tag;
const { Search } = Input;
import PageWrapper from "@/pageWrapper"
import "assets/less/project.less";

import ProjectItem from "@/project-item";


const tagsFromServer = [
  { value: "all", label: "所有组织" },
  { value: "wegame", label: "WeGame运营部" },
  { value: "design", label: "P&P Design" },
  { value: "1001", label: "1001" },
];

class App extends React.Component {
  state = {
    selectedTags: ["all"],
  };
  createProject = () => {
    console.log("点击了创建项目");
  };
  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

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

    const { selectedTags } = this.state;
    return (
      <PageWrapper defaultSelectedKeys={["1"]}><div className="project-list">
        <Row justify="space-between" align="middle" className="project-list-hd">
          <Col span={12} className="project-list-hd-main">
            <h3 className="project-list-title">项目列表</h3>
            <div className="project-list-category">
              <a className="project-list-category-item active">我的项目</a>
              <a className="project-list-category-item">全部项目</a>
            </div>
          </Col>

          <Col>
            <Button type="primary" onClick={this.createProject} href="/project/create">
              创建项目
            </Button>
          </Col>
        </Row>
        {/* <div className="project-list-hd">
          <h3 className="project-list-title">全部项目</h3>
          <Button type="primary" onClick={this.createProject}>
            创建项目
          </Button>

          
        </div> */}
        <div className="project-filter">
          <Row justify="start" align="middle" className="project-filter-group">
            <Col span={2}>所属组织：</Col>
            <Col>
              {tagsFromServer.map((tag) => (
                <CheckableTag
                  key={tag.value}
                  checked={selectedTags.indexOf(tag.value) > -1}
                  onChange={(checked) => this.handleChange(tag.value, checked)}
                >
                  {tag.label}
                </CheckableTag>
              ))}
            </Col>
          </Row>
          <Row className="project-filter-search" align="middle">
            <Col span={2}>搜索：</Col>
            <Col span={8}>
              <Search
                placeholder="input search text"
                onSearch={(value) => console.log(value)}
              />
            </Col>
          </Row>
        </div>
        <div className="project-list-bd">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
              xxl: 5,
            }}
            dataSource={data}
            renderItem={(item,index) => (
              <List.Item>
                <ProjectItem title={item.title} isAuthorized={index%2===0?true:false}>Card content</ProjectItem>
              </List.Item>
            )}
          />
          <Row justify="center" align="middle">
            <Pagination defaultCurrent={1} total={50} />
          </Row>
        </div>
      </div></PageWrapper>
    );
  }
}

export default App;
