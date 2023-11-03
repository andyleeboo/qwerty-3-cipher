const qwertyKeyboard: string[][] = [
	['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
	['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
	['z', 'x', 'c', 'v', 'b', 'n', 'm']
];
const plainTextFormat = /^[a-zA-Z\s]+$/;
const cipherFormat = /^[0-9]-[1-3]$/;

export class Qwerty3Cipher {
	encrypt(plainText: string): string {
		if (!this.validatePlainText(plainText)) return '';

		let cipherText = '';
		const charToCipherMapping: Record<string, string> = this.createCharToCipherMapping();

		for (const char of plainText.toLowerCase()) {
			cipherText += charToCipherMapping[char] || (char === ' ' ? '__' : '');
			cipherText += ' ';
		}

		return cipherText.trim();
	}

	decrypt(cipherText: string): string {
		const coordinates = cipherText.trim().split(' ');

		return coordinates
			.map((coord) => {
				if (coord === '__') return ' ';
				if (!this.validateCipherText(coord)) return '';

				const [col, row] = coord.split('-').map(Number);
				return qwertyKeyboard[row - 1]?.[col - 1] ?? '';
			})
			.join('');
	}

	private createCharToCipherMapping(): Record<string, string> {
		const mapping: Record<string, string> = {};
		qwertyKeyboard.forEach((row, rowIndex) => {
			row.forEach((char, charIndex) => {
				mapping[char] = `${(charIndex + 1) % 10}-${rowIndex + 1}`;
			});
		});
		return mapping;
	}

	private validatePlainText(plainText: string): boolean {
		return plainTextFormat.test(plainText);
	}

	private validateCipherText(cipherText: string): boolean {
		// If cipherText is empty, avoid splitting it into an empty array [""] which would incorrectly pass the test.
		if (!cipherText) return false;
		return cipherText.split(' ').every((ct) => ct === '__' || cipherFormat.test(ct));
	}
}
