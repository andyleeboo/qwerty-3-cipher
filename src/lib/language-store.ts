import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Language = 'en' | 'ko';

export const DEFAULT_LANGUAGE = 'en';

const storedLanguage = browser && (localStorage.getItem('language') as Language | undefined);

export const languageStore = writable<Language>(storedLanguage || DEFAULT_LANGUAGE);
