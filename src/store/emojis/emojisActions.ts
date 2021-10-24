
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

//obs
import { rawEmojis$, emojiSearchResults$ } from './emojisStore';

const API_URL = 'http://localhost:4000/emojis';

export const getEmojis = () => ajax.getJSON(API_URL)
	.pipe(
		map((values: any) => {
			rawEmojis$.next(values);
		})
	).subscribe();

export const searchEmojis = (searchTerm: string) => {
	emojiSearchResults$.next([]);
}
