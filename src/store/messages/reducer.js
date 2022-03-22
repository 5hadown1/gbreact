import {
	ADD_MESSAGE
} from "./actions";
import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state, 
				[action.payload.chatId]:[
					...state[action.payload.chatId], action.payload.newMsg
				]
			};
		}
		case ADD_CHAT: {
			return {
				...state,
				[action.payload.id]: []
			}
		}
		case DELETE_CHAT: {
			const newMsgs = { ...state };
			delete newMsgs[action.payload];
			return newMsgs;
		}
		default:
			return state;
	}
};
