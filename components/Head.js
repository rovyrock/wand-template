import Head from 'next/head'
import React, {Component} from 'react'
import {withRouter} from 'next/router'
import { connect } from 'react-redux';
import RouteConf from '../config/route'

@withRouter

@connect(
  state => state.TitleReducer
)

class Header extends Component{

  render(){

    const { pathname } = this.props.router;

    let currentTitle;

    if(Object.keys(RouteConf).indexOf(pathname) > -1){
      currentTitle = `${RouteConf[pathname]}-魔法棒`;
    }else{
      currentTitle = `${this.props.currentTitle}-魔法棒` ;
    }

    return(
      <Head>
        <title>{currentTitle}</title>
        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta httpEquiv="description" content="魔法棒" className="next-head"/>
        <meta name="Keywords" content="魔法棒，vue，react，nextjs，ssr" className="next-head"/>
        <meta name="Description" content="魔法棒" className="next-head"/>
        <meta name="author" content="魔法棒" className="next-head"/>
        <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
        <link rel="stylesheet" type="text/css" href="/static/css/markdown.css"/>
        <link rel="stylesheet" type="text/css" href="/static/css/navbar.css"/>
      </Head>
    )
  }
}


export default Header