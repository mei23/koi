import { 札一覧生成 } from './札';
import { 完成役取得 } from './役';
import { 役点取得 } from './役点';

async function main() {
	const 札一覧 = 札一覧生成();
	for (const 札 of 札一覧) {
		console.log(JSON.stringify(札));
	}

	const 役情報 = 完成役取得(札一覧);
	console.log(JSON.stringify(役情報, null, 2));

	const 役点情報 = 役点取得(札一覧);
	console.log(JSON.stringify(役点情報, null, 2));
}

main();
