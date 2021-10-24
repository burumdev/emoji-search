
import React, { useState, useEffect } from 'react';
import { useObservableState } from 'observable-hooks';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

//actions
import { searchEmojis } from '../../store/emojis/emojisActions';

//store
import { searchLoading$ } from '../../store/emojis/emojisStore';

//comps
import Input from '../common/Input';

//styles
import s from './EmojiSearcher.module.css';

const EmojiSearcher: React.FC = () => {
	//state
	const [searchTerm, setSearchTerm] = useState('');
	const [onSearch$] = useState(() => new Subject<string>());
	const searchLoading = useObservableState(searchLoading$, false);

	useEffect(() => {
		const subscription = onSearch$.pipe(
			debounceTime(1000),
			distinctUntilChanged(),
		).subscribe(searchEmojis);
		//Destructor
		return () => subscription.unsubscribe();
	}, [onSearch$])

	//funcs
	const onSearchInputChange = (searchTerm: string) => {
		setSearchTerm(searchTerm);

		//Reset if search is 0 to 2 letters
		if (searchTerm.length < 3) onSearch$.next('');
		else {
			searchLoading$.next(true);
			onSearch$.next(searchTerm);
		}
	}

	return (
		<div className={s.EmojiSearcher}>
			<Input
				value={searchTerm}
				onChange={(e: any, value: string) => onSearchInputChange(value)}
				size='big'
				placeholder='Search Emojis...'
				isAutoFocus
			/>&nbsp;&nbsp;
			<span>{searchLoading ? 'Loading...' : ''}</span>
		</div>
	)
}

export default EmojiSearcher;
