
export interface IRawEmoji {
	title: string,
	symbol: string,
	keywords: string
}

export interface IEmoji extends IRawEmoji {
	titleLowerCase: string;
	keywordsArr: string[]
}
