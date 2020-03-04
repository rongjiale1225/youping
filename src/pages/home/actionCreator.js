<<<<<<< HEAD
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
=======
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
>>>>>>> bf2addf4826ee14591362b5ed21547115ca91a2a
}