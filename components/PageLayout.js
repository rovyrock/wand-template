import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import classNames from 'classnames';
import { BackTop,Layout } from 'antd';
import {withRouter} from 'next/router'
import { connect } from 'react-redux';
import {toggleDispatch} from '../store/redux/classname-redux'
import '../public/less/styles.less'

@withRouter

@connect(
	state => state.ClassNameReducer,
	{toggleDispatch}
)

class PageLayout extends Component{

    render(){
        const { pathname } = this.props.router;
        let pageClassName = ''
        if(pathname === '/'){
            pageClassName = this.props.toggleDispatch("admin-layout-content--home").title
        }else{
            pageClassName = this.props.toggleDispatch("").title
        }
        const {children} = this.props;
        return(
            <Layout className="admin-layout" theme="light" style={{display:'flex',width:'100%',height:'100%'}}>
                <Header />
                <main id="home-wrap" className={classNames('admin-layout-content', pageClassName)}>
                    {children}
                </main>
                <Footer />
                <BackTop />
            </Layout>
        )
    }

}

export default PageLayout