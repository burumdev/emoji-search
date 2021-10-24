import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';

//setters
import { emojisSetter } from './emojisSetters';

//types
import { IRawEmoji } from './emojis.types';

//subjects
export const rawEmojis$ = new BehaviorSubject<IRawEmoji[]>([]);

//observables
const setEmojis$ = rawEmojis$.pipe(
	map(emos =>
		emojisSetter(emos)
	)
)
