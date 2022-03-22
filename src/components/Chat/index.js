import React, { useEffect, useRef } from "react";
import { MessageList } from "../MessageList";
import { Form } from '../Form';
import { AUTHORS } from "../../utils/constants";
import { Navigate, useParams } from "react-router";

import "../../App.css";
import { addMessageWithThunk } from "../../store/messages/actions";
import { useDispatch } from "react-redux";

export function Chat( { messages } ) {
	const params = useParams();
	const dispatch = useDispatch();
	const { chatId } = params;

	const messagesEnd = useRef();

	const handleAddMessage = (text) => {
		sendMessage(text, AUTHORS.ME);
	};

	const sendMessage = (text, author) => {
		const newMsg = {
			text: text,
			author: author,
			id: `msg-${Date.now()}`,
		};
		dispatch(addMessageWithThunk(chatId, newMsg));
	};

	useEffect(() => {
		messagesEnd.current?.scrollIntoView();
	}, [messages]);

	if (!messages[chatId]) {
		return <Navigate to="/chats" replace />;
	}

	return (
		<div className="App">
			<header className="App-header">
				<MessageList messages={messages[chatId]} />
				<Form onSubmit={handleAddMessage} />
			</header>
		</div>
	);
}