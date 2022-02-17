import {
	CHANGE_SHOW_NAME
} from "./actions";

const initialState = {
	name: "Default name of user",
	showName: false,
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_SHOW_NAME: {
			return {
				...state,
				showName: !state.showName,
			};
		}

		default:
			return state;
	}
};