import React from "react";
import { Button, Col, Input, List, Pagination, Row, Tag } from "antd";
const { CheckableTag } = Tag;
const { Search } = Input;

import ModalOrganizationApply from "@/modal-organization-apply"
import OrganizationItem from "@/organization-item";

const tagsFromServer = [
  { value: "all", label: "所有组织" },
  { value: "wegame", label: "WeGame运营部" },
  { value: "design", label: "P&P Design" },
  { value: "1001", label: "1001" },
];

class App extends React.Component {
  state = {
    selectedTags: ["all"],
    visible: false
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

    const { selectedTags, visible } = this.state;
    return (
      <main>
        <div className="organization-list">
          <Row justify="space-between" align="middle" className="organization-list-hd">
            <Col span={12} className="organization-list-hd-main">
              <h3 className="organization-list-title">组织列表</h3>
              <div className="organization-list-category">
                <a className="organization-list-category-item active">我的组织</a>
                <a className="organization-list-category-item">全部组织</a>
              </div>
            </Col>

            <Col>
              <Button type="primary">
                创建组织
              </Button>
            </Col>
          </Row>

          <div className="organization-filter">
            <Row justify="start" align="middle" className="organization-filter-group">
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
            <Row className="organization-filter-search" align="middle">
              <Col span={2}>搜索：</Col>
              <Col span={8}>
                <Search
                  placeholder="input search text"
                  onSearch={(value) => console.log(value)}
                />
              </Col>
            </Row>
          </div>
          <div className="organization-list-bd">
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
                  <OrganizationItem title={item.title} isAuthorized={index % 2 === 0 ? true : false}></OrganizationItem>
                </List.Item>
              )}
            />
            <Row justify="center" align="middle">
              <Pagination defaultCurrent={1} total={50} />
            </Row>
          </div>
        </div>
        <ModalOrganizationApply visible={visible} onHandleOk={this.onHandleOk} onHandleCancel={this.onHandleCancel}></ModalOrganizationApply>
      </main>
    );
  }
}

export default App;
