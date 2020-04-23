import * as React from 'react';
import classNames from 'classnames';
import { Layout } from 'antd';


import 'assets/less/index.less';
import WidgetHeader from './header';
import WidgetFooter from './footer';

export default class App extends React.Component {
  componentDidMount() {
    document.getElementById('__next').classList.add('admin-app');
  }
  componentWillUnmount() {
    document.getElementById('__next').classList.remove('admin-app');
  }
  render() {
    const {children,withHeader=true,withFooter=true,className,defaultSelectedKeys} = this.props;
    const clsString = classNames('admin-layout-content', className);
    return <Layout className="admin-layout" theme="light" style={{display:'flex',width:'100%',height:'100%'}}>
      {withHeader ? (
            <WidgetHeader defaultSelectedKeys={defaultSelectedKeys}></WidgetHeader>
        ) : null}
      <div className={clsString}>{children ? children : null}</div>
      {withFooter ? (
            <WidgetFooter></WidgetFooter>
        ) : null}
    </Layout>
  }
}