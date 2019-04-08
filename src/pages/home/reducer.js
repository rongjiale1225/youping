import {
  GET_HOMEPAGE
} from './actionTypes'

const defaultValue = {
  homepage:[]
}

export default (state = defaultValue, action) => {
  switch(action.type) {
    case GET_HOMEPAGE:
      return {
        ...state,
        homepage: action.homepage
      }
    default:
      return state
  }
}