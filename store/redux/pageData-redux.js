const CLASSNAME_TOGGLE = 'CLASSNAME_TOGGLE';

const PageData = {
  data: {
    className: 'admin-layout-content',
    defaultSelectedKeys: ["0"]
  }
}

export function PageDataReducer(state = PageData, action) {
  switch (action.type) {
    case CLASSNAME_TOGGLE:
      return {
        ...state, data: action.title
      }
      default:
        return state;
  }
}

export function toggleDispatch(title = {className:"",defaultSelectedKeys:["0"]}) {
  return {
    type: CLASSNAME_TOGGLE,
    title
  }
}