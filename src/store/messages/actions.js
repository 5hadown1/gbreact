import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatId, newMsg) => ({
	type: ADD_MESSAGE,
	payload: {
		chatId : chatId,
		newMsg: newMsg,
	},
});

let timeout;

export const addMessageWithThunk = (chatId, newMsg) => (dispatch, getState) => {
	dispatch(addMessage(chatId, newMsg));

	if(newMsg.author !== AUTHORS.BOT) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			const messageFromBot = {
				text: 'I send your message',
				author: AUTHORS.BOT,
				id: `msg-${Date.now()}`,
			};
			dispatch(addMessage(chatId, messageFromBot));
		}, 1500);
	}
};