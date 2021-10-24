
import React from 'react';

//types
import { IEmojiItemProps } from './EmojiItem.types';

//styles
import s from './EmojiItem.module.css';

const EmojiItem: React.FC<IEmojiItemProps> = ({
	emoji
}) => {
	return (
		<li className={s.EmojiItem}>
			<div className={s.EmojiItemInner}>
				<span className={s.EmojiItemSymbol}>{emoji.symbol}</span>
				<span className={s.EmojiItemTitle}>{emoji.title}</span>
			</div>
		</li>
	)
}

export default EmojiItem;
