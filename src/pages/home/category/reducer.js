import {
  GET_CATEGORY
} from './actionTypes'

const defaultValue = {
  category:[]
}

export default (state = defaultValue, action) => {
  switch(action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        homepage: action.category
      }
    default:
      return state
  }
}