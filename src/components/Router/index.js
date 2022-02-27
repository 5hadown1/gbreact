import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { Profile } from "../Profile";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chats/actions";
import { addMessage } from "../../store/messages/actions";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
	const chatList = useSelector(selectChats);
	const messages = useSelector(selectMessages);
	const dispatch = useDispatch();

	const handleAddMessage = (chatId, newMsg) => {
		dispatch(addMessage(chatId, newMsg));
	};

	const handleAddChat = (newChatName) => {
		const newId = `chat-${Date.now()}`;

		const newChat = {
			id: newId,
			name: newChatName
		};

		dispatch(addChat(newId, newChatName));
	};

	const handleDeleteChat = (idToDelete) => {
		dispatch(deleteChat(idToDelete));
	};

	return (
	<BrowserRouter>
		<div>
		<NavLink
			to="/"
			style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
		>
			home
		</NavLink>
		</div>
		<div>
		<NavLink
			style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
			to="/profile"
		>
			Profile
		</NavLink>
		</div>
		<div>
		<NavLink
			style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
			to="/chats"
		>
			chats
		</NavLink>
		</div>
		<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="chats" element={<ChatList chats={chatList} onAddChat={handleAddChat} onDeleteChat={handleDeleteChat}/>}>
			<Route path=":chatId" element={<Chat messages={messages} addMessage={handleAddMessage} />} />
		</Route>
		<Route path="*" element={<h2>404</h2>} />
		</Routes>
	</BrowserRouter>
	);
};