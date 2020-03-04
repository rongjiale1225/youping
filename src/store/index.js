<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const enhancer = applyMiddleware( thunk )

const store = createStore(reducer,enhancer)

=======
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const enhancer = applyMiddleware( thunk )

const store = createStore(reducer,enhancer)

>>>>>>> bf2addf4826ee14591362b5ed21547115ca91a2a
export default store