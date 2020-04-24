import { createStore, applyMiddleware } from 'redux'
// dispatch一个action之后，到达reducer之前，进行一些额外的操作，就需要用到middleware。你可以利用 Redux middleware 来进行日志记录、创建崩溃报告、调用异步接口或者路由等等。
import thunkMiddleware from 'redux-thunk'
import reducers from './reducer'
// 调试redux代码的工具
import {composeWithDevTools} from 'redux-devtools-extension'

export function initializeStore(initialState = {}) {
	const isDev = process.env.NODE_ENV === 'development'
	return createStore(reducers, initialState, isDev ? composeWithDevTools(applyMiddleware(thunkMiddleware)) : applyMiddleware(thunkMiddleware))
}
