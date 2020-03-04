import http from 'utils/fetch'

import {
  GET_HOMEPAGE
} from './actionTypes'

export const getHomepageSync = homepage => {
  return({
    type: GET_HOMEPAGE,
    homepage
  })
}

export const getHomepageAsync = () => {
  return async dispatch => {
    let result = await http.get('/api/mobile/homepage')
    dispatch(getHomepageSync(result))
  }
}