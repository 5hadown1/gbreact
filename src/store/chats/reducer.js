import {
	ADD_CHAT, DELETE_CHAT
} from "./actions";

const initialState = [];

export const chatsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHAT: {
			return [
                ...state, 
                { 
                    name : action.payload.name,
                    id: action.payload.id
                }
            ]
		}
        case DELETE_CHAT: {
            return state.filter(({ id }) => 
                id !== action.payload
            );
        }

		default:
			return state;
	}
};