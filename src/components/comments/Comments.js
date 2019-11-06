import React, { useState } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import Collapse from 'react-collapse'
import AddCommentAction from '../../actions/AddCommentAction'
import './Comments.css'

const Comments = props => {
	const [isCollapsed, collapse] = useState(true)
	const [comment, setComment] = useState('')

	const handleCollapse = e => {
		e.preventDefault()
		collapse(!isCollapsed)
	}
	const handleComment = e => {
		props.dispatch(AddCommentAction(props.data.id, props.username, comment))
		setComment('')
		collapse(false)
	}
	return (
		<div className="comments-box">
			<div
				onClick={e => handleCollapse(e)}
			>{`${props.data.comments.length} comments`}</div>
			<Collapse isOpened={!isCollapsed}>
				<div className="comments-box">
					<input
						type="text"
						value={comment}
						onChange={e => setComment(e.target.value)}
						className="comment-input"
						placeholder="type comment"
					/>
					<button className="submit-comment" onClick={e => handleComment(e)}>
						leave comment
					</button>
					{props.data.comments.map(comment => {
						return (
							<div
								className="comment"
								key={uuid()}
							>{`@${comment.author} commented: ${comment.comment}`}</div>
						)
					})}
				</div>
			</Collapse>
		</div>
	)
}

const mapStateToProps = state => ({
	username: state.username,
})
export default connect(mapStateToProps)(Comments)
