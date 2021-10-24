
import React from 'react';
import { useObservableState } from 'observable-hooks';

//store
import { setEmojis$ } from '../../store/emojis/emojisStore';

//comps
import EmojiItem from './EmojiItem';

//styles
import s from './EmojisList.module.css';

const EmojisList: React.FC = () => {
	const emojis = useObservableState(setEmojis$, [])
	return (
		<>
			<h2>Found Emojis</h2>
			<ul className={s.EmojisList}>
				{emojis.map(emo => <EmojiItem emoji={emo} key={emo.symbol} />)}
			</ul>
		</>
	)
}

export default EmojisList;
