import React from "react";

import PageWrapper from "@/pageWrapper"

class App extends React.Component {
  render() {
    return (
      <PageWrapper defaultSelectedKeys={["1"]}><div className="project-edit">这是 project/edit 的内容部分</div></PageWrapper>
    );
  }
}

export default App;
