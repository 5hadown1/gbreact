export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatId, newMsg) => ({
	type: ADD_MESSAGE,
	payload: {
		chatId : chatId,
		newMsg: newMsg,
	},
});

