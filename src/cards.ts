/** 月ごとの札情報 */
type 月 = {
	月: 月種別;
	光: '' | '光' | '雨';
	種: boolean;
	短: '' | '短' | '赤短' | '青短';
	カスの数: number;
};

export type 札 = {
	id: string;
	月: 月種別;
	種別: 札種別;
	カス番号?: number;
};

type 月種別 = '松' | '梅' | '桜' | '藤' | '菖蒲' | '牡丹' | '萩' | '芒' | '菊' | '紅葉' | '柳' | '桐';
type 札種別 = '光' | '雨' | '短' | '赤短' | '青短' | '種' | 'カス';

const 月一覧: 月[] = [
	{ 月: '松',   光: '光', 種: false, 短: '赤短', カスの数: 2 },
	{ 月: '梅',   光: '',   種: true,  短: '赤短', カスの数: 2 },
	{ 月: '桜',   光: '光', 種: false, 短: '赤短', カスの数: 2 },
	{ 月: '藤',   光: '',   種: true,  短: '短',   カスの数: 2 },
	{ 月: '菖蒲', 光: '',   種: true,  短: '短',   カスの数: 2 },
	{ 月: '牡丹', 光: '',   種: true,  短: '青短', カスの数: 2 },
	{ 月: '萩',   光: '',   種: true,  短: '短',   カスの数: 2 },
	{ 月: '芒',   光: '光', 種: true,  短: '',     カスの数: 2 },
	{ 月: '菊',   光: '',   種: true,  短: '青短', カスの数: 2 },
	{ 月: '紅葉', 光: '',   種: true,  短: '青短', カスの数: 2 },
	{ 月: '柳',   光: '雨', 種: true,  短: '短',   カスの数: 1 },
	{ 月: '桐',   光: '光', 種: false, 短: '',     カスの数: 3 },
];

export function 札一覧生成() {
	const 札一覧: 札[] = [];
	for(const 月 of 月一覧) {
		// 光
		if (月.光) {
			札一覧.push({ id: `${月.月}${月.光}`, 月: 月.月, 種別: 月.光 });
		}

		// 種
		if (月.種) {
			札一覧.push({ id: `${月.月}種`, 月: 月.月, 種別: '種' as 札種別 });
		}

		// 短冊
		if (月.短) {
			札一覧.push({ id: `${月.月}${月.短}`, 月: 月.月, 種別: 月.短 });
		}

		if (月.カスの数 > 0) {
			for(let 整数 = 0; 整数 < 月.カスの数; 整数++) {
				札一覧.push({ id: `${月.月}カス${整数}`, 月: 月.月, 種別: 'カス' as 札種別, カス番号: 整数 });
			}
		}
	}
	return 札一覧;
}

