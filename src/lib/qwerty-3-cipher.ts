const qwertyKeyboard = [
	['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
	['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
	['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

export class Qwerty3Cipher {
	encrypt(plainText: string): string {
		let cipherText = '';
		for (let i = 0; i < plainText.length; i++) {
			const char = plainText.charAt(i);

			if (char === ' ') {
				cipherText += '__ ';
				continue;
			}

			let found = false;
			for (let j = 0; j < qwertyKeyboard.length && !found; j++) {
				for (let k = 0; k < qwertyKeyboard[j].length && !found; k++) {
					if (qwertyKeyboard[j][k] == char) {
						cipherText += k + 1 + '-' + (j + 1) + ' ';
						found = true;
					}
				}
			}
		}
		return cipherText.trim();
	}

	decrypt(cipherText: string): string {
		let plainText = '';
		const coordinates = cipherText.trim().split(' ');
		for (let i = 0; i < coordinates.length; i++) {
			if (coordinates[i] === '__') {
				plainText += ' ';
				continue;
			}

			const coord = coordinates[i].split('-');
			const row = Number(coord[1]) - 1;
			const col = Number(coord[0]) - 1;
			plainText += qwertyKeyboard[row][col];
		}
		return plainText.trim();
	}
}
