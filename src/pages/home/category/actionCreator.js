import http from 'utils/fetch'

import {
  GET_CATEGORY
} from './actionTypes'

export const getHomepageSync = category => ({
  type: GET_CATEGORY,
  category
})

export const getHomepageAsync = () => {
  return async dispatch => {
    let result = await http.post('/app/shopv3/pipe')
    dispatch(getHomepageSync(result.data.homepage.floors))
  }
}