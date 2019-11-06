import React from 'react'
import './App.css'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'

//components
import Greeting from './components/greeting/Greeting'
import Main from './components/main/Main'
import AddPost from './components/addPost/AddPost'

const App = props => {
	const PrivateRoute = ({ isLoggedIn, ...props }) =>
		isLoggedIn ? <Route {...props} /> : <Redirect to="/" />

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact render={() => <Greeting data={props} />} />
					<PrivateRoute
						isLoggedIn={props.username.length > 0}
						path="/main"
						component={Main}
					/>
					<PrivateRoute
						isLoggedIn={props.username.length > 0}
						path="/addPost"
						render={() => <AddPost data={props} />}
					/>
					/>
				</Switch>
			</Router>
		</div>
	)
}
const mapStateToProps = state => ({
	username: state.username,
	posts: state.posts,
})
export default connect(mapStateToProps)(App)

//  <Route path="/main" component={Main} />
// <Route path="/addPost" render={() => <AddPost data={props} />} />
