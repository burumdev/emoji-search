
import { of, combineLatestWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

//obs
import { rawEmojis$, setEmojis$, emojiSearchResults$, searchLoading$ } from './emojisStore';

const API_URL = 'http://localhost:4000/emojis';

export const getEmojis = () => ajax.getJSON(API_URL)
	.pipe(
		map((values: any) => {
			rawEmojis$.next(values);
		})
	).subscribe();

export const searchEmojis = (searchTerm: string) => {
	if (searchTerm === '') {
		emojiSearchResults$.next([]);
		searchLoading$.next(false);
		return;
	}

	const searchKeywords = searchTerm.toLowerCase().trim().split(' ');

	setEmojis$.pipe(
		combineLatestWith(of(searchKeywords)),
		map(([emos, searchWords]) => {
			const emoPoints = emos.map(emo => {
				let relPoint = 0;
				let directMatchCount = 0;

				const emoKeywords = emo.keywordsArr;
				const emoTitleTokens = emo.title.toLowerCase().trim().split(' ');
				searchWords.forEach(sw => {
					emoTitleTokens.forEach(emott => {
						if (emott === sw) {
							directMatchCount++;
							relPoint += 20 * directMatchCount;
						} else if (emott.startsWith(sw)) {
							relPoint += 10;
						} else if (emott.length > 2 && sw.startsWith(emott)) {
							relPoint += 5;
						}
					})
					emoKeywords.forEach(emok => {
						if (emok === sw) {
							directMatchCount++;
							relPoint += 20 * directMatchCount;
						} else if (emok.startsWith(sw)) {
							relPoint += 10;
						} else if (emok.length > 2 && sw.startsWith(emok)) {
							relPoint += 5;
						}
					})
				})

				return {
					...emo,
					relPoint
				};
			})

			return emoPoints.filter(emo => emo.relPoint !== 0).sort((a, b) => b.relPoint - a.relPoint);
		})
	).subscribe(searchResults => {
		emojiSearchResults$.next(searchResults);
		searchLoading$.next(false);
	}).unsubscribe();
}
