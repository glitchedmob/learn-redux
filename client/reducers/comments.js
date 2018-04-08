export function postComments(state = [], action) {
	switch(action.type) {
			case 'ADD_COMMENT':
				return [
					...state,
					{
						user: action.author,
						text: action.comment
					}
				]
				break;
			case 'REMOVE_COMMENT':
				const i = action.index;
				return [
					...state.slice(0, i),
					...state.slice(i + 1)
				]
				break;
		default:
			return state;
	}
}

export function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			...state,
			[action.postId]: postComments(state[action.postId], action)
		}
	}

	return state;
}