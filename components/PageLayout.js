import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import classNames from 'classnames';
import { BackTop,Layout } from 'antd';
import {withRouter} from 'next/router'
// import { connect } from 'react-redux';
// import {toggleDispatch} from '../store/redux/pageData-redux'
// import RouteConf from '../config/route'
import '../assets/less/styles.less'

@withRouter

// @connect(
// 	state => state.PageDataReducer,
// 	{toggleDispatch}
// )

class PageLayout extends Component{
    
    render(){
        const { pathname } = this.props.router;

        // console.log('pageLayout',pathname)

        let defaultSelectedKeys,className;
        if(pathname === '/'){
            className = "admin-layout-content--home",
            defaultSelectedKeys = ["0"]
        }else if(pathname === '/act'){
            defaultSelectedKeys = ["2"]
        }else if(pathname === '/project' || pathname === '/project/list' || pathname === '/project/detail' || pathname === '/project/create'){
            defaultSelectedKeys = ["1"]
        }
        const {children} = this.props;
        return(
            <Layout className="admin-layout" theme="light" style={{display:'flex',width:'100%',height:'100%'}}>
                <Header defaultSelectedKeys ={defaultSelectedKeys}/>
                <main id="home-wrap" className={classNames('admin-layout-content', className)}>
                    {children}
                </main>
                <Footer />
                <BackTop />
            </Layout>
        )
    }

}

export default PageLayout