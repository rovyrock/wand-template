import React from "react";
import { Button, Col, Input, List, Pagination, Row, Tag } from "antd";
const { CheckableTag } = Tag;
const { Search } = Input;


import ActItem from "@/act-item";
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
      <main>
        <div className="act-list">
          <Row justify="space-between" align="middle" className="act-list-hd">
            <Col span={12} className="act-list-hd-main">
              <h3 className="act-list-title">全部活动</h3>
              <div className="act-list-category">
              <a className="act-list-category-item active">我的活动</a>
              <a className="act-list-category-item">全部活动</a>
            </div>
            </Col>

            <Col>
              <Button type="primary" onClick={this.createProject} href="/act/create">
                创建活动
              </Button>
            </Col>
          </Row>

          <div className="act-filter">
            <Row justify="start" align="middle" className="act-filter-group">
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
            <Row className="act-filter-search" align="middle">
              <Col span={2}>搜索：</Col>
              <Col span={8}>
                <Search
                  placeholder="input search text"
                  onSearch={(value) => console.log(value)}
                />
              </Col>
            </Row>
          </div>
          <div className="act-list-bd">
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
              renderItem={(item,index) => (
                <List.Item>
                  <ActItem isAuthorized={index%2===0?true:false}></ActItem>
                </List.Item>
              )}
            />
            <Row justify="center" align="middle">
              <Pagination defaultCurrent={1} total={50} />
            </Row>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
