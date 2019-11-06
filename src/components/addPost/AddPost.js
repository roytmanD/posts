import React, { useState } from 'react'
import CreatePostAction from '../../actions/CreatePostAction'
import { Redirect } from 'react-router-dom'
import uuid from 'uuid'

const AddPost = props => {
	const [title, setTitle] = useState('')
	const [requiresRedirect, redirect] = useState(false)
	const [img, setImg] = useState('')

	const handleChange = e => {
		setTitle(e.target.value)
	}

	const createPost = () => {
		props.data.dispatch(
			CreatePostAction({
				id: uuid(),
				title: title,
				submitTime: new Date().toLocaleString(),
				username: props.data.username,
				votes: 0,
				comments: [],
				pic: img.image,
			})
		)
		alert(`Post ${title} created!`)
	}

	const handleImgChange = event => {
		if (event.target.files && event.target.files[0]) {
			setImg({
				image: URL.createObjectURL(event.target.files[0]),
			})
		}
	}
	if (!requiresRedirect) {
		return (
			<div>
				<h1>Add Post!</h1>
				<input
					type="text"
					placeholder="input title"
					value={title}
					onChange={e => handleChange(e)}
				/>
				<input type="file" onChange={e => handleImgChange(e)} />
				<button onClick={() => createPost()}>submit</button>
				<button onClick={() => redirect(true)}>Back to Main</button>
			</div>
		)
	} else {
		return <Redirect to="/main" />
	}
}

export default AddPost
