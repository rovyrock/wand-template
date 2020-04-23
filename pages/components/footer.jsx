import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;
class App extends React.Component {
  render() {
    return (
      <Footer className="admin-layout-footer" style={{ textAlign: 'center' }}>WeGame PC平台部运营中心 && 发行线设计中心</Footer>
    );
  }
}

export default App;
