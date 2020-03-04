<<<<<<< HEAD
import {
  GET_HOMEPAGE
} from './actionTypes'

const defaultValue = {
  homepage:{}
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
=======
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
>>>>>>> bf2addf4826ee14591362b5ed21547115ca91a2a
}