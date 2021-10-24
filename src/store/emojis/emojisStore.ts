import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

//setters
import { emojisSetter } from './emojisSetters';

//types
import { IRawEmoji, IEmoji } from './emojis.types';

//subjects
export const rawEmojis$ = new BehaviorSubject<IRawEmoji[]>([]);
export const emojiSearchResults$ = new BehaviorSubject<IEmoji[]>([]);
export const searchLoading$ = new BehaviorSubject<boolean>(false);

//observables
export const setEmojis$ = rawEmojis$.pipe(
	map(emos =>
		emojisSetter(emos)
	)
)
