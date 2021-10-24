
//types
import { IRawEmoji, IEmoji } from './emojis.types';

export const emojisSetter = (emojis: IRawEmoji[]): IEmoji[] => {
	return emojis.map(emo => {
		const rawKeywordsArr: string[] = emo.keywords.split(' ');
		//remove duplicate keywords
		const keywordsArr: string[] = rawKeywordsArr.filter((keyw, index, self) => self.indexOf(keyw) === index);
		return {
			...emo,
			titleLowerCase: emo.title.toLowerCase(),
			keywordsArr
		}
	})
}
