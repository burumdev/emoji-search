
import React, { useState } from 'react';

//actions
import { searchEmojis } from '../../store/emojis/emojisActions';

//comps
import Input from '../common/Input';

//styles
import s from './EmojiSearcher.module.css';

const EmojiSearcher: React.FC = () => {
	//state
	const [searchTerm, setSearchTerm] = useState('');

	//funcs
	const onSearchInputChange = (searchTerm: string) => {
		setSearchTerm(searchTerm);
		searchEmojis(searchTerm);
	}

	return (
		<div className={s.EmojiSearcher}>
			<Input
				value={searchTerm}
				onChange={onSearchInputChange}
				size='big'
				placeholder='Search Emojis...'
				isAutoFocus
			/>
		</div>
	)
}

export default EmojiSearcher;
