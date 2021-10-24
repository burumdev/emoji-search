
//types
import { IRawEmoji, IEmoji } from './emojis.types';

export const emojisSetter = (emojis: IRawEmoji[]): IEmoji[] => {
	return emojis.map(emo => {
		const keywordsArr: string[] = emo.keywords.split(' ');
		return {
			...emo,
			titleLowerCase: emo.title.toLowerCase(),
			keywordsArr
		}
	})
}
