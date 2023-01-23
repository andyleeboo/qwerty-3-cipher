<script lang="ts">
	import { analytics } from '$lib/firebase';
	import { Qwerty3Cipher } from '$lib/qwerty-3-cipher';
	import { CopyButton, TextArea } from 'carbon-components-svelte';
	import { logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';

	const title = 'QWERTY-3 Cipher';
	const cipher = new Qwerty3Cipher();

	let value: string = 'hello world';

	$: result = cipher.encrypt(value);

	onMount(() => {
		logEvent(analytics, 'page_view', {
			page_title: title,
			page_location: window.location.href,
			page_path: window.location.pathname
		});
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<h1>{title}</h1>

	<p>
		The QWERTY-3 Cipher is a simple encryption algorithm that uses the layout of the QWERTY keyboard
		to encode messages. Each letter of the plaintext message is replaced with a pair of digits in
		the format of "number-number" representing its position on the keyboard.
	</p>
	<p>The first digit can be any number from 1 to 0 and the second digit can only be 1 to 3.</p>
	<p>To represent the spacebar in the ciphertext, we use the string "__".</p>
	<p>
		This type of encryption is relatively simple and easy to use, but it is not considered to be
		very secure, as the layout of the keyboard is well known and can be easily determined by
		frequency analysis.
	</p>
	<p>
		Please note that this is a fictional example, and it is not considered to be a secure encryption
		method in practice.
	</p>

	<h2>Playground</h2>

	<div class="box">
		<TextArea labelText="Plain Text" placeholder="Write something here" bind:value />
		<div class="wrapper">
			<TextArea labelText="Cipher Text" placeholder="Write something here" bind:value={result} />
			<div class="button-wrapper">
				<CopyButton text={result} />
			</div>
		</div>
	</div>
</main>

<footer>
	<span>
		Copyright © 2023, <a href="https://github.com/andyleeboo">andyleeboo</a>. All rights reserved.
	</span>
	<div>
		<a href="https://github.com/andyleeboo/qwerty-3-cipher">Github</a>
	</div>
	<span>
		This project was aided by <a href="https://openai.com/blog/chatgpt/"> ChatGPT</a>
	</span>
</footer>

<style>
	main {
		min-height: 85vh;
		padding: 1rem 1rem;
		max-width: 1020px;
	}
	h1,
	h2,
	p {
		margin-bottom: 1rem;
	}
	footer {
		padding: 1rem 1rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
		max-width: 1020px;
	}
	.box {
		margin-bottom: 1rem;
		width: 100%;
		display: flex;
		gap: 1rem;
	}
	.wrapper {
		display: flex;
		gap: 1rem;
	}
	.button-wrapper {
		padding-top: 24px;
	}
	@media only screen and (max-width: 768px) {
		.box {
			flex-direction: column;
		}
	}
</style>
