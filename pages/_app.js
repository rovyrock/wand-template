import App from 'next/app';
import { withRouter } from 'next/router'
import {Provider} from 'react-redux'
import withReduxStore from '../store/with-redux-store'
import PageLayout from '../components/PageLayout';

@withReduxStore
@withRouter

class MyApp extends App {
	
  constructor(props) {
    super(props);
    if (typeof window === 'undefined') {
      global.window = {}
    }
    const { Component, pageProps, router } = props;
    this.state = { Component, pageProps, router };
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.Component !== prevState.Component
      || nextProps.pageProps !== prevState.pageProps
      || nextProps.router !== prevState.router) {
      return {
        Component: nextProps.Component,
        pageProps: nextProps.pageProps,
        router: nextProps.router
      };
    }
    return null;
  }

  componentDidMount(){
    //title变化
    let reallyDocumentTitle;
    document.addEventListener('visibilitychange', event => {
      if (event.target.hidden || event.target.webkitHidden) {
        reallyDocumentTitle = document.title
        document.title = '魔法棒'
      } else {
        document.title = reallyDocumentTitle
      }
    }, false)
    document.getElementById('__next').classList.add('admin-app');
  }
  componentWillUnmount() {
    document.getElementById('__next').classList.remove('admin-app');
  }

  
  render () {

    const { Component, pageProps, router, reduxStore,className } = this.props;
    console.log("_app",this.props)
    return (

				<Provider store={reduxStore}>
					<PageLayout className={className} {...pageProps} >
						<Component  {...pageProps} />
					</PageLayout>
				</Provider>

    );
  }
  
}

export default MyApp
