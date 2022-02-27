import { List } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Form } from "../Form";
import { ChatItem } from "./ChatItem";

export const ChatList = ({ chats, onAddChat, onDeleteChat }) => (
  <>
	<List>
	  {chats.map((chat) => (<ChatItem chat={chat} onDeleteChat={onDeleteChat} key={chat.id} />))}
	</List>
	<Form onSubmit={onAddChat} />
	<Outlet />
  </>
);