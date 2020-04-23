import React from "react";
import { Button, List, Row, Col, Avatar, Tag, Pagination, Input,Checkbox, Layout, Footer,Upload,message, Modal, Form, Select, AutoComplete } from "antd";
import { PlusOutlined,UploadOutlined } from '@ant-design/icons';
import PageWrapper from "@/pageWrapper"

import "assets/less/project.less";
import "assets/less/act.less";

const layout = {
   labelCol: { span: 4 },
   wrapperCol: { span: 20 },
};
const tailLayout = {
   wrapperCol: { offset: 4, span: 20 },
};

const { Option } = Select;


const options22 = [{ 
   value: 'gold',
   face:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
},{ 
   value: 'lime',
   face:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' 
},{ 
   value: 'green',
   face:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' 
},{ 
   value: 'cyan',
   face:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' 
},{ 
   value: 'cyan2',
   face:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' 
},{ 
   value: 'cyan3',
   face:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' 
},{ 
   value: 'cyan4',
   face:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' 
},{ 
   value: 'cyan5',
   face:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' 
}];



const childrendd = [];
for(let i=0;i<options22.length;i++){
   childrendd.push(<Option key={options22[i].value} value={[options22[i].value,options22[i].face]} label={options22[i].value}><Avatar src={options22[i].face} /> {options22[i].value}</Option>);
}

//图像上传
const props = {
   name: 'file',
   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
   headers: {
     authorization: 'authorization-text',
   },
   onChange(info) {
     if (info.file.status !== 'uploading') {
       console.log(info.file, info.fileList);
     }
     if (info.file.status === 'done') {
       message.success(`${info.file.name} file uploaded successfully`);
     } else if (info.file.status === 'error') {
       message.error(`${info.file.name} file upload failed.`);
     }
   },
 };


class App extends React.Component {
  state = {
      detags: [],
      zrbase:[],
      modalvisible:false,
      modalvisiblezr:false
  };

  showInput = () => {
    this.setState({
      modalvisible: true
    });
  };
  showInputzr = () => {
    this.setState({
      modalvisiblezr: true
    });
  };


  handleChange = e =>{
    this.setState({ detags: e});
    //console.log(e);
  };
  handleChangezr = e =>{
    this.setState({ zrbase: e});
    //console.log(e);
  };

  handleClose = removedTag => {
    const detags = this.state.detags.filter(tagck  => tagck  !== removedTag);
    const zrbase = this.state.zrbase.filter(tagck  => tagck  !== removedTag);
    this.setState({ detags,zrbase });
  };
  

  handleInputConfirm = () => {
    this.setState({
      modalvisible:false
    })
  };
  handleInputConfirmzr = () => {
    this.setState({
      modalvisiblezr:false
    })
  };

  handleCancel =() =>{
    this.setState({
      modalvisible:false
    });
  }
  handleCancelzr =() =>{
    this.setState({
      modalvisiblezr:false
    });
  }
  

  forMap= tagck => {
      const lbck = (
         <span className="project-create-avator-wrap">
            <Avatar size={40} src={tagck.value[1]} className="project-create-avator-face" />
            {tagck.label}
         </span>
   );
   return (
      <Tag closable key={tagck.label} onClose={e => {e.preventDefault();this.handleClose(tagck);}} className="project-create-avator">
         {lbck}
      </Tag>
    );
  };



render() {
   const { detags,zrbase,modalvisible } = this.state;
   const tagChild = detags.map(this.forMap);
   const zrtagChild = zrbase.map(this.forMap);
   return (
      <PageWrapper defaultSelectedKeys={["1"]}>
        <div className="project-create">
        <Row justify="space-between" align="middle" className="project-create-hd">
          <Col span={12}>
            <h3 className="project-create-title">创建项目</h3>
          </Col>
        </Row>
        <div className="project-create-bd">
          <Row justify="flex-start" align="middle" className="project-create-edit">
              <Form {...layout} name="basic" className="act-create-form" initialValues={{ remember: true, acturl22:false }}>
                <Form.Item className="act-create-item" label="项目名称" name="act-title" rules={[{ required: true, message: '请输入项目名称' }]}>
                  <div className="act-create-input-box">
                    <AutoComplete placeholder="请输入项目名称">
                      <Input />
                    </AutoComplete>
                  </div>
                </Form.Item>

                <Form.Item className="act-create-item" label="项目英文名" name="act-entitle" rules={[{ required: true, pattern:new RegExp("^[a-zA-Z]+$"), message: '必须是字母' }]}>
                  <div className="act-create-input-box">
                    <AutoComplete placeholder="必须是字母">
                      <Input />
                    </AutoComplete>
                  </div>
                </Form.Item>

                <Form.Item className="act-create-item" label="项目简介" name="act-info">
                  <div className="act-create-input-box">
                    <AutoComplete placeholder="请输入项目简介">
                      <Input />
                    </AutoComplete>
                  </div>
                </Form.Item>

                <Form.Item className="act-create-item" label="项目图标" name="act-upicon" style={{ height: 'auto' }} >
                  <div className="act-create-input-box">
                  <Upload {...props} className="project-create-upload">
                     <Button className="project-create-upload-btn">
                        <UploadOutlined className="project-create-upload-icon" /> 
                        <span className="project-create-upload-text">点击上传</span>
                     </Button>
                  </Upload>
                  </div>
                </Form.Item>

              
                <Form.Item align="middle" className="act-create-item" label="正式域名" name="act-url">
                  <div className="act-create-input-box">
                    <Row align="middle">
                      <Col span={14} >
                      <Form.Item style={{marginBottom:0,marginRight:20}}>
                        <AutoComplete disabled={true} placeholder="正式域名" >
                           <Input />
                        </AutoComplete>
                    </Form.Item>
                      </Col>
                      <Col span={10}>
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>使用魔法棒默认域名</Checkbox>
                    </Form.Item>
                      </Col>
                    
                    
                    </Row>
                  </div>
                </Form.Item>

                <Form.Item className="act-create-item" label="所属组织" name="act-tag">
                  <div className="act-create-input-box">
                    <Tag>WeGame</Tag>
                    <Tag>P&P 设计中心</Tag>
                  </div>
                </Form.Item>

                <Form.Item className="act-create-item" label="分类标签" name="act-type">
                  <div className="act-create-input-box">
                    <AutoComplete placeholder="如：RGP,MOBA,FPS,单机">
                      <Input />
                    </AutoComplete>
                  </div>
                </Form.Item>

                <Form.Item align="top" className="act-create-item" label="项目负责人" name="act-charge" rules={[{ required: true, message: '请添加项目负责人' }]} style={{ marginBottom: 30 }}>
                    <div className="act-create-input-box">
                          <Row justify="flex-start" align="top">
                              <Col span={2}>
                                  <Button type="default" shape="circle" onClick={this.showInput} icon={<PlusOutlined />} size="large" className="project-create-addbtn">
                                    <span>添加成员</span>
                                  </Button>
                              </Col>
                              <Col span={22} justify="flex-start">
                                {tagChild}
                              </Col>
                          </Row>
                    </div>
                    <Modal title="人员选择" visible={this.state.modalvisible} onOk={this.handleInputConfirm} onCancel={this.handleCancel} cancelText="取消" okText="确定">
                        <Select mode="tags" tagRender={tagChild}  style={{ width: '100%' }} labelInValue={true} optionLabelProp="label" onChange={this.handleChange}>
                          {childrendd}
                        </Select>
                    </Modal>
                </Form.Item>
                <Form.Item align="top" className="project-create-item" label="项目成员" name="act-member"  style={{ height: 'auto' }}  >
                    <div className="act-create-input-box">
                          <Row justify="flex-start" align="top">
                              <Col span={24}>
                                  <Button type="default" shape="circle" onClick={this.showInputzr} icon={<PlusOutlined />} size="large" className="project-create-addbtn">
                                     <span>添加成员</span>
                                  </Button>
                              </Col>
                          </Row>
                          <Row justify="flex-start" align="top">
                             <Col span={24} className="project-create-memberlist">
                              {zrtagChild}
                             </Col>
                          </Row>
                    </div>
                    <Modal title="人员选择" visible={this.state.modalvisiblezr} onOk={this.handleInputConfirmzr} onCancel={this.handleCancelzr} cancelText="取消" okText="确定">
                        <Select mode="tags" tagRender={zrtagChild}  style={{ width: '100%' }} labelInValue={true} optionLabelProp="label" onChange={this.handleChangezr}>
                          {childrendd}
                        </Select>
                    </Modal>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <div className="project-create-submit">
                    <Button type="primary" htmlType="submit" className="act-create-form-btn">提交</Button>
                    <Button htmlType="button" className="act-create-form-btn">取消</Button>
                  </div>
                </Form.Item>

              </Form>
            </Row>
        </div>
      </div></PageWrapper>
    );
  }
}

export default App;
