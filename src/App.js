import { useEffect, useState } from "react";
import { MessageList } from './components/MessageList';
import { Form } from './components/Form';
import { ListItem, List, ListItemText } from "@mui/material";
import { AUTHORS } from './utils/constants';
import './App.css';

const chats = [
	{ name: "Chat1", id: "1" },
	{ name: "Chat2", id: "2" },
];

function App() {
	const [messageList, setMessageList] = useState([]);

	const handleAddMessage = (text) => {
		sendMessage(text, AUTHORS.ME);
	};

	const sendMessage = (text, author) => {
		const newMsg = {
			text: text,
			author: author,
			id: `msg-${Date.now()}`,
		};
		setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
	};

	useEffect(() => {
		let timeout;

		timeout = setTimeout(() => {
			if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
				sendMessage('I send your message', AUTHORS.BOT)
			}
		}, 1500); 

		return () => {
			clearTimeout(timeout);
		}
	}, [messageList]);

	return (
		<div className="App">
			<List sx = {{width: '100%',maxWidth: 360, backgroundColor: 'white', color: 'black', marginRight: '50px'}}> 
				{chats.map((chat) => (
						<ListItem key = {chat.id}>
							<ListItemText primary = {`Line item ${chat.name}`}/> 
						</ListItem>
				))} 
			</List>
			<header className="App-header">
				<MessageList messages={messageList} />
				<Form onSubmit={handleAddMessage} />
			</header>
		</div>
	);
}

export default App;