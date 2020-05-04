
/** 月ごとのカードラインナップ */
type Month = {
	/** 月 */
	month: number;
	/** なし or 光 or 光(雨) */
	hikari: '' | 'hikari' | 'ame';
	/** 種あるか */
	tane: boolean;
	/** なし or 短冊 or 赤短 or 青短 */
	tan: '' | 'tan' | 'akatan' | 'aotan';
	/** カスの数 */
	kasu: number;
};

type Card = {
	id: string;
	month: number;
	type: string;
	kasuIndex?: number;
}

const months: Month[] = [
	{ month:  1, hikari: 'hikari', tane: false, tan: 'akatan', kasu: 2 },
	{ month:  2, hikari: '',       tane: true,  tan: 'akatan', kasu: 2 },
	{ month:  3, hikari: 'hikari', tane: false, tan: 'akatan', kasu: 2 },
	{ month:  4, hikari: '',       tane: true,  tan: 'tan',    kasu: 2 },
	{ month:  5, hikari: '',       tane: true,  tan: 'tan',    kasu: 2 },
	{ month:  6, hikari: '',       tane: true,  tan: 'aotan',  kasu: 2 },
	{ month:  7, hikari: '',       tane: true,  tan: 'tan',    kasu: 2 },
	{ month:  8, hikari: 'hikari', tane: true,  tan: '',       kasu: 2 },
	{ month:  9, hikari: '',       tane: true,  tan: 'aotan',  kasu: 2 },
	{ month: 10, hikari: '',       tane: true,  tan: 'aotan',  kasu: 2 },
	{ month: 11, hikari: 'ame',    tane: true,  tan: 'tan',    kasu: 1 },
	{ month: 12, hikari: 'hikari', tane: false, tan: '',       kasu: 3 },
];

export function buildCards() {
	const cards: Card[] = [];
	for(const m of months) {
		// 光
		if (m.hikari) {
			const card = { id: `${m.month}${m.hikari}`, month: m.month, type: m.hikari };
			cards.push(card);
		}

		// 種
		if (m.tane) {
			const card = { id: `${m.month}tane`, month: m.month, type: 'tane' };
			cards.push(card);
		}

		// 短冊
		if (m.tan) {
			const card = { id: `${m.month}${m.tan}`, month: m.month, type: m.tan };
			cards.push(card);
		}

		if (m.kasu > 0) {
			for(let i = 0; i < m.kasu; i++) {
				const card = { id: `${m.month}kasu${i}`, month: m.month, type: 'kasu', kasuIndex: i };
				cards.push(card);
			}
		}
	}
	return cards;
}

