import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import UsernameReducer from './reducers/UsernameReducer'
import PostsReducer from './reducers/PostsReducer'

const rootReducer = combineReducers({
	username: UsernameReducer,
	posts: PostsReducer,
})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()
