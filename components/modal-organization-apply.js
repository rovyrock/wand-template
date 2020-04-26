import React from "react";
import { Checkbox, Col, Modal, Row} from "antd";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['所有', 'A项目', 'B项目', 'C项目', 'D项目', 'E项目', 'F项目'];
const defaultCheckedList = [, 'B项目', 'C项目'];

class App extends React.Component {
  state = {
    visible: this.props.visible,
    confirmLoading: false,
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
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

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
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
        title="申请组织"
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
        centered={true}
        okText="确认"
        cancelText="取消"
        className="modal-organization-apply"
      >
        <div className="modal-organization-apply-content">
          <Row justify="flex-start" align="middle" className="modal-organization-apply-item">
            <Col span={6}>
              <span className="modal-organization-apply-des">申请加入组织：</span>
            </Col>
            <Col span={18}>
              <h3 className="modal-organization-apply-title">WeGame运营部</h3>
            </Col>
          </Row>
          <Row justify="flex-start" align="middle" className="modal-organization-apply-item">
            <Col span={6}>
              <span className="modal-organization-apply-des">开通项目：</span>
            </Col>
            <Col span={18} className="modal-organization-apply-checkbox">
              <CheckboxGroup
                options={plainOptions}
                value={this.state.checkedList}
                onChange={this.onChange}
              />
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

export default App;
