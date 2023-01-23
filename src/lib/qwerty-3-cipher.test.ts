import { beforeEach, describe, expect, it } from 'vitest';
import { Qwerty3Cipher } from './qwerty-3-cipher';

describe('Qwerty3Cipher', () => {
	let qwerty3: Qwerty3Cipher;
	beforeEach(() => {
		qwerty3 = new Qwerty3Cipher();
	});

	describe('encrypt', () => {
		it('should encrypt "hello world" to "6-2 3-1 9-2 9-2 9-1 __ 2-1 9-1 4-1 9-2 3-2"', () => {
			expect(qwerty3.encrypt('hello world')).toBe('6-2 3-1 9-2 9-2 9-1 __ 2-1 9-1 4-1 9-2 3-2');
		});
	});

	describe('decrypt', () => {
		it('should decrypt "6-2 3-1 9-2 9-2 9-1 __ 2-1 9-1 4-1 9-2 3-2" to "hello world"', () => {
			expect(qwerty3.decrypt('6-2 3-1 9-2 9-2 9-1 __ 2-1 9-1 4-1 9-2 3-2')).toBe('hello world');
		});
	});
});
