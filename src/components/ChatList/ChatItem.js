
import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export const ChatItem = ({chat, onDeleteChat}) => (
	<ListItem>
		<Link to={`/chats/${chat.id}`}>{chat.name}</Link>
		<div onClick={() => onDeleteChat(chat.id)}>X</div>
	</ListItem>
)