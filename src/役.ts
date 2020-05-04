import { 札 } from './札';

const 猪 = '萩種';
const 鹿 = '紅葉種';
const 蝶 = '牡丹種';
const 菊に盃 = '菊種';

/**
 * こいこい状態や点数を考慮しない見た目での役
 */
type 役情報 = {
	五光: number;
	四光: number;
	雨四光: number;
	三光: number;

	猪鹿蝶: number;
	種: number;

	/** 5で1, 6で2 */
	短冊: number;
	赤短: number;
	青短: number;
	赤青重: number;

	/** 10で1, 11で2 */
	カス: number;
};

export type 役オプション = {
	菊に盆はカスにも含める: boolean;
};

export function 完成役取得(手札: 札[], オプション = { 菊に盆はカスにも含める: true }): 役情報 {
	const 完成役: 役情報 = {
		五光: 0,
		四光: 0,
		雨四光: 0,
		三光: 0,
		猪鹿蝶: 0,
		種: 0,
		短冊: 0,
		赤短: 0,
		青短: 0,
		赤青重: 0,
		カス: 0,
	};

	// 光
	if (手札.filter(x => x.種別 === '光' || x.種別 === '雨').length === 5) {
		完成役.五光 = 1;
	} else if (手札.filter(x => x.種別 === '光').length === 4) {
		完成役.四光 = 1;
	} else if (手札.filter(x => x.種別 === '光').length === 3) {
		if (手札.filter(x => x.種別 === '雨').length === 1) {
			完成役.雨四光 = 1;
		} else {
			完成役.三光 = 1;
		}
	}

	// 猪鹿蝶
	if (手札.filter(x => x.id === 猪 || x.id === 鹿 || x.id === 蝶).length === 3) {
		完成役.猪鹿蝶 = 1;
	}

	// 赤短
	if (手札.filter(x => x.種別 === '赤短').length === 3) {
		完成役.赤短 = 1;
	}

	// 青短
	if (手札.filter(x => x.種別 === '青短').length === 3) {
		完成役.青短 = 1;
	}

	// 赤青重
	if (完成役.赤短 && 完成役.青短) {
		完成役.赤青重 = 1;
	}

	// 短
	const 短冊の数 = 手札.filter(x => x.種別 === '青短' || x.種別 === '赤短' || x.種別 === '短').length;
	if (短冊の数 >= 5) {
		完成役.短冊 = 短冊の数 - 4;
	}

	// 種
	const 種の数 = 手札.filter(x => x.種別 === '種').length;
	if (種の数 >= 5) {
		完成役.種 = 種の数 - 4;
	}

	// カス
	const カスの数 = 手札.filter(x => x.種別 === 'カス' || (オプション.菊に盆はカスにも含める && x.id === 菊に盃)).length;
	if (カスの数 >= 10) {
		完成役.カス = カスの数 - 9;
	}

	return 完成役;
}
