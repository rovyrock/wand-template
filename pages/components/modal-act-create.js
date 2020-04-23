import React from "react";
import { Modal, Button, Row, Col, Form, Input, Select, AutoComplete } from "antd";
const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

class App extends React.Component {
  state = {
    visible: this.props.visible,
    confirmLoading: false,
    indeterminate: true
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    this.setState({
      visible: false,
      confirmLoading: false,
    });

    const { onHandleOk } = this.props;
    if (onHandleOk) {
      onHandleOk.call(this, false);
    }
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
    const { onHandleCancel } = this.props;
    if (onHandleCancel) {
      onHandleCancel.call(this, false);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({
        visible: nextProps.visible
      });
    }
  }

  render() {
    const { visible, confirmLoading, ModalText } = this.state;

    return (

      <Modal
        title="创建活动"
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
        centered={true}
        okText="确认"
        cancelText="取消"
        className="modal-create-act"
        width="800px"
        footer={null}
      >
        {/* S 创建活动 */}
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
            <div class="act-create-submit"><button type="submit" class="ant-btn act-create-btn ant-btn-primary"><span>提 交</span></button><button type="button" class="ant-btn act-create-btn"><span>取 消</span></button></div>
          </Form.Item>

        </Form>

        {/* E 创建活动 */}
      </Modal>

    );
  }
}

export default App;
