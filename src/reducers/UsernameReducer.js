const initialState = ''

const UsernameReducer = (state = initialState, action) => {
	if (action.type === 'CREATE USERNAME') {
		return action.payload
	}
	return state
}

export default UsernameReducer
