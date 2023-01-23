<script lang="ts">
	import { Qwerty3Cipher } from '$lib/qwerty-3-cipher';

	const title = 'QWERTY-3 Cipher';
	const cipher = new Qwerty3Cipher();

	let encryptValue: string = 'hello world';
	let decryptValue: string = '6-2 3-1 9-2 9-2 9-1 __ 2-1 9-1 4-1 9-2 3-2';

	$: encryptResult = cipher.encrypt(encryptValue);
	$: decryptResult = cipher.decrypt(decryptValue);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<p>
	The QWERTY-3 Cipher is a simple encryption algorithm that uses the layout of the QWERTY keyboard
	to encode messages. Each letter of the plaintext message is replaced with a pair of digits in the
	format of "number-number" representing its position on the keyboard.
</p>
<p>The first digit can be any number from 1 to 0 and the second digit can only be 1 to 3.</p>
<p>To represent the spacebar in the ciphertext, we use the string "__".</p>
<p>
	This type of encryption is relatively simple and easy to use, but it is not considered to be very
	secure, as the layout of the keyboard is well known and can be easily determined by frequency
	analysis.
</p>
<p>
	Please note that this is a fictional example, and it is not considered to be a secure encryption
	method in practice.
</p>

<h2>Playground</h2>

<div class="example">
	<input type="text" bind:value={encryptValue} />
	<p>{encryptResult}</p>
</div>

<div class="example">
	<input type="text" bind:value={decryptValue} />
	<p>{decryptResult}</p>
</div>

<footer>
	<span>
		Copyright © 2023, <a href="https://github.com/andyleeboo">andyleeboo</a>. All rights reserved.
	</span>
	<div>
		<a href="https://github.com/andyleeboo/qwerty-3-cipher">Github</a>
	</div>
	<p>
		This project was aided by <a href="https://openai.com/blog/chatgpt/"> ChatGPT</a>
	</p>
</footer>

<style>
	input {
		width: 100%;
	}
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		text-align: center;
	}
	.example {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
