import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { Profile } from "../Profile";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
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
		<Route path="chats" element={<ChatList />}>
			<Route path=":chatId" element={<Chat />} />
		</Route>
		<Route path="*" element={<h2>404</h2>} />
	  </Routes>
	</BrowserRouter>
  );
};