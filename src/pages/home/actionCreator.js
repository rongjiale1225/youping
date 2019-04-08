import http from 'utils/fetch'

import {
  GET_HOMEPAGE
} from './actionTypes'

export const getHomepageSync = homepage => ({
  type: GET_HOMEPAGE,
  homepage
})

export const getHomepageAsync = () => {
  return async dispatch => {
    let result = await http.post('/homepage/main/v1003?platform=m')
    dispatch(getHomepageSync(result.data.homepage.floors))
  }
}