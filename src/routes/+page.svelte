<script lang="ts">
	import { analytics } from '$lib/firebase';
	import { Qwerty3Cipher } from '$lib/qwerty-3-cipher';
	import { CopyButton, Select, SelectItem, TextArea } from 'carbon-components-svelte';
	import { logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	const title = 'QWERTY-3 Cipher';
	const cipher = new Qwerty3Cipher();

	let value: string = 'hello world';
	let lang: string;

	$: result = cipher.encrypt(value);

	function changeLanguage(e: any) {
		const selectedLanguage = e.target.value;
		addQueryStringParam('lang', selectedLanguage);
		reloadPage();
	}

	function getQueryStringParam(key: string) {
		const url = new URL(window.location.href);
		return url.searchParams.get(key);
	}

	function addQueryStringParam(key: string, value: string) {
		const url = new URL(window.location.href);
		url.searchParams.set(key, value);
		window.history.pushState({}, '', url.href);
	}

	function reloadPage() {
		window.location.reload();
	}

	onMount(() => {
		lang = getQueryStringParam('lang') || 'en';

		logEvent(analytics, 'page_view', {
			page_title: title,
			page_location: window.location.href,
			page_path: window.location.pathname
		});
	});
</script>

<svelte:head>
	<title>{$_('page.home.title')}</title>
</svelte:head>

<main>
	<div class="top">
		<h1>{$_('page.home.title')}</h1>

		<div class="lang">
			<Select selected={lang} on:change={(e) => changeLanguage(e)}>
				<SelectItem value="en" />
				<SelectItem value="ko" />
			</Select>
		</div>
	</div>

	<p>{$_('page.home.intro.first')}</p>
	<p>{$_('page.home.intro.second')}</p>
	<p>{$_('page.home.intro.third')}</p>
	<p>{$_('page.home.intro.fourth')}</p>
	<p>{$_('page.home.intro.fifth')}</p>

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
	h1 {
		margin-bottom: 2rem;
	}
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
	.top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
	}
	.lang {
		min-width: 100px;
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
