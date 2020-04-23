import React from "react";
import { Button, List, Row, Col, Tag, Input, Layout, Footer, Form, Select, AutoComplete } from "antd";
const { Option } = Select;
import PageWrapper from "@/pageWrapper"
import "assets/less/act.less";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};
class App extends React.Component {
  render() {
    return (
      <PageWrapper defaultSelectedKeys={["2"]}>
        <div className="act-create">
          <Row justify="space-between" align="middle" className="act-create-hd">
            <Col span={12}>
              <h3 className="act-create-title">创建活动</h3>
            </Col>
          </Row>
          <div className="act-create-bd">
            <Row justify="flex-start" align="middle" className="act-create-edit">
              <Form
                {...layout}
                name="basic"
                className="act-create-form"
              >
                <Form.Item
                  className="act-create-item"
                  label="活动标题"
                  name="act-title"
                  rules={[{ required: true, message: '请输入活动标题' }]}
                >
                  <div className="act-create-input-box">
                    <AutoComplete placeholder="请输入活动标题">
                      <Input />
                    </AutoComplete>
                  </div>
                </Form.Item>

                <Form.Item
                  className="act-create-item"
                  label="活动URL"
                  name="act-url"
                  rules={[{ required: true, message: '请输入活动URL' }]}
                >
                  <Row justify="space-between" align="middle" className="act-create-item-wrapper">
                    <Col span={13}>
                      <Form.Item
                        name="act-url"
                      // className="act-create-items"
                      >
                        <span className="act-create-form-des">活动域名</span>
                        <Select placeholder="请选择">
                          <Option value="wegame1">http://www.wegame.com.cn</Option>
                          <Option value="wegame2">http://www.wegame.com.cn</Option>
                          <Option value="wegame3">http://www.wegame.com.cn</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={10}>
                      <Form.Item >
                        <span className="act-create-form-des">路径</span>
                        <AutoComplete placeholder="如20200324act">
                          <Input />
                        </AutoComplete>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item
                  name="act-url"
                  rules={[{ required: true, message: '请输入所属项目' }]}
                  className="act-create-item"
                  label="所属项目"
                >
                  <div className="act-create-input-box">
                    <Select placeholder="请选择">
                      <Option value="wegame4">WeGame项目</Option>
                      <Option value="wegame5">WeGame项目</Option>
                      <Option value="wegame6">WeGame项目</Option>
                    </Select>
                  </div>
                </Form.Item>

                <Form.Item
                  name="act-url"
                  rules={[{ required: true, message: '请选择模板' }]}
                  className="act-create-item"
                  label="模板"
                >
                  <div className="act-create-input-box">
                    <Select placeholder="请选择">
                      <Option value="wegame7">H5模板</Option>
                      <Option value="wegame8">PC模板</Option>
                    </Select>
                  </div>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <div className="act-create-submit">
                    <Button type="primary" htmlType="submit" className="act-create-btn">提交</Button>
                    <Button htmlType="button" className="act-create-btn">取消</Button>
                  </div>
                </Form.Item>

              </Form>

            </Row>

          </div>
        </div>
      </PageWrapper >
    );
  }
}

export default App;
