const AddCommentAction = (id, username, comment) => ({
	type: 'ADD COMMENT',
	payload: { id, username, comment },
})

export default AddCommentAction
