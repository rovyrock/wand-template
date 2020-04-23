import * as React from 'react';
import PageHome from './home/index';

export default class App extends React.Component {
  componentDidMount() {
    document.getElementById('__next').classList.add('admin-app');
  }
  componentWillUnmount() {
    document.getElementById('__next').classList.remove('admin-app');
  }
  render() {
    return <PageHome></PageHome>
  }
}