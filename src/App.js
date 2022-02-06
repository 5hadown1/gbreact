import { useEffect, useState } from "react";
import { Message } from './components/Message';
import { Form } from './components/Form';
import './App.css';

function App() {
	const [messageList, setMessageList] = useState([]);

	const handleAddMessage = ({author, text}) => {
		setMessageList([...messageList, {author: author, text: text}]);
	};

	useEffect(() => {
		let timeout;

		timeout = setTimeout(() => {
			if (messageList[messageList.length - 1]?.author === "Me") {
				setMessageList([...messageList, {author: 'Robot', text: 'I send your message'}])
			}
		}, 1500); 

		return () => {
			clearTimeout(timeout);
		}
	}, [messageList]);

	return (
		<div className="App">
			<header className="App-header">
				{messageList.map(({author, text}) => (
					<Message text={text} author={author}/>
				))}
				<Form onSubmit={handleAddMessage} />
			</header>
		</div>
	);
}

export default App;