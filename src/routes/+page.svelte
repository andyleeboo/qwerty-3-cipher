<script lang="ts">
	const title = 'QWERTY-3 Cipher';
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

<div>
	<p>
		This project was aided by <a href="https://openai.com/blog/chatgpt/"> ChatGPT</a>
	</p>
</div>
