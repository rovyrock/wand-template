// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { SideReducer } from './redux/menu-redux';
import { TitleReducer } from './redux/title-redux';
import { ClassNameReducer } from './redux/classname-redux';

export default combineReducers({SideReducer, TitleReducer,ClassNameReducer})
