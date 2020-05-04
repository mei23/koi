import { buildCards } from './cards';

async function main() {
	const cards = buildCards();
	for (const card of cards) {
		console.log(JSON.stringify(card));
	}
}

main();
