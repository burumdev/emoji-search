import React, { useLayoutEffect } from 'react';
import './App.css';

//actions
import { getEmojis } from './store/emojis/emojisActions';

//comps
import EmojiSearcher from './components/EmojiSearcher/EmojiSearcher';

const App: React.FC = () => {
	//effect
	useLayoutEffect(() => {
		getEmojis();
	});

	return (
		<div className="App">
			<h1>Emoji Search</h1>
			<EmojiSearcher />
		</div>
	);
}

export default App;
