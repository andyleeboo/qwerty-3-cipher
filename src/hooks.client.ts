import { getLocaleFromQueryString, init, register } from 'svelte-i18n';

register('en', () => import('./lib/i18n/en.json'));
register('ko', () => import('./lib/i18n/ko.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromQueryString('lang')
});
