import React, { useState } from 'react'
import Post from '../post/Post'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { Redirect } from 'react-router-dom'
import './main.css'
const Main = props => {
	const [requiresRedirect, redirect] = useState(false)

	if (!requiresRedirect) {
		return (
			<div>
				<h1>{`Welcome, ${props.username}`}</h1>
				<button className="create-post" onClick={() => redirect(true)}>
					create post
				</button>
				<ul className="posts-list">
					{props.posts.map(post => {
						return (
							<li key={uuid()}>
								<Post data={post} />
							</li>
						)
					})}
				</ul>
			</div>
		)
	} else {
		return <Redirect to="/addPost" />
	}
}
const mapStateToProps = state => ({
	posts: state.posts,
	username: state.username,
})
export default connect(mapStateToProps)(Main)
