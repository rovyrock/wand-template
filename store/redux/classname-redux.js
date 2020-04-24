const CLASSNAME_TOGGLE = 'CLASSNAME_TOGGLE';

const PageClassName = {
  className: 'admin-layout-content'
}

export function ClassNameReducer(state = PageClassName, action) {
  switch (action.type) {
    case CLASSNAME_TOGGLE:
      return {
        ...state, className: action.title
      }
      default:
        return state;
  }
}

export function toggleDispatch(title = '') {
  return {
    type: CLASSNAME_TOGGLE,
    title
  }
}
