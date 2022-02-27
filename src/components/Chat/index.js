import React, { useState, useEffect, useRef } from "react";
import { MessageList } from "../MessageList";
import { Form } from '../Form';
import { AUTHORS } from "../../utils/constants";
import { Navigate, useParams } from "react-router";

import "../../App.css";

export function Chat( { messages, addMessage } ) {
	const params = useParams();
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
		addMessage(chatId, newMsg);
	};

	useEffect(() => {
		messagesEnd.current?.scrollIntoView();
		let timeout;

		timeout = setTimeout(() => {
			if (messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.ME) {
				sendMessage('I send your message', AUTHORS.BOT)
			}
		}, 1500); 

		return () => {
			clearTimeout(timeout);
		}
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