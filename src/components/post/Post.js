import React from 'react'
import uuid from 'uuid'
import './post.css'
import Comments from '../comments/Comments'
import Votes from '../votes/Votes'
import webdevstack from '../../imgs/webdevstack.jpg'

const Post = props => {
	return (
		<div key={uuid()} className="post-box">
			<Votes data={props.data} />
			<div className="img-wrap">
				{props.data.pic ? (
					<img className="img-box" src={props.data.pic} alt="post" />
				) : (
					<img className="img-box" src={webdevstack} alt="post" />
				)}
			</div>
			<div className="post-text">
				<h3>{props.data.title}</h3>
				<p>{`submitted on ${props.data.submitTime} by @${props.data.username}`}</p>
				<Comments data={props.data} />
			</div>
		</div>
	)
}

export default Post
