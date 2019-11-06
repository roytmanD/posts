import uuid from 'uuid'
const initialState = [
	{
		id: uuid(),
		title: 'TEST POST',
		submitTime: new Date().toLocaleString(),
		username: 'tester',
		comments: [],
		votes: 0,
	},
	{
		id: uuid(),
		title: 'TEST POST2',
		submitTime: new Date().toLocaleString(),
		username: 'tester',
		comments: [],
		votes: 0,
	},
	{
		id: uuid(),
		title: 'TEST POST3',
		submitTime: new Date().toLocaleString(),
		username: 'tester',
		comments: [
			{ author: 'tester1', comment: 'test comm #1' },
			{ author: 'tester2', comment: 'hi tester1' },
		],
		votes: 0,
	},
]
const PostsReducer = (state = initialState, action) => {
	if (action.type === 'ADD POST') {
		return state.concat(action.payload)
	} else if (action.type === 'ADD COMMENT') {
		const posts = state
		const postIndx = posts.findIndex(p => p.id === action.payload.id)
		posts[postIndx].comments = posts[postIndx].comments.concat({
			author: action.payload.username,
			comment: action.payload.comment,
		})
		return posts
	}
	return state
}

export default PostsReducer
