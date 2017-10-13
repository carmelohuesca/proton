/// <reference path='../typings/index.d.ts' />

import { Proton } from '../src/index';

describe('Proton - La partícula Protón contiene los prototipos nativos de js más usados', () => {
	let instance: Proton;
	const SENTENCE = 'carmelo huesca calatayud';
	const SENTENCE_WITH_HTML = '<b>carmelo huesca calatayud</b>';
	const DASHERIZED = 'carmelo-huesca-calatayud';
	const CAPITALIZED = 'Carmelo huesca calatayud';
	const CAMELIZED = 'carmeloHuescaCalatayud';
	const HASHED = -524672366;
	const SCAPED = '&lt;b&gt;carmelo huesca calatayud&lt;/b&gt;';

	beforeEach(() => {
		instance = new Proton();
	});

	it('la instancia está definida', () => {
		expect(instance).toBeDefined();
	});

	describe('la instancia debe ser un singleton', () => {
		it('igualdad entre instancias', () => {
			expect(instance).toBeDefined();
			let instance2 = new Proton();
			expect(instance2).toBeDefined();
			expect(instance).toBe(instance2);
		});
	});

	describe('los prototipos son los siguientes', () => {
		it('dasherize(' + `${SENTENCE}` + ') => ' + `${DASHERIZED}`, () => {
			instance = new Proton();
			expect(Proton.string.dasherize(SENTENCE)).toBe(DASHERIZED);
		});
		it('capitalize(' + `${SENTENCE}` + ') => ' + `${CAPITALIZED}`, () => {
			instance = new Proton();
			expect(Proton.string.capitalize(SENTENCE)).toBe(CAPITALIZED);
		});
		it('camelize(' + `${SENTENCE}` + ') => ' + `${CAMELIZED}`, () => {
			instance = new Proton();
			expect(Proton.string.camelize(SENTENCE)).toBe(CAMELIZED);
		});
		it('hash(' + `${SENTENCE}` + ') => ' + `${HASHED}`, () => {
			instance = new Proton();
			expect(Proton.string.hash(SENTENCE)).toBe(HASHED);
		});
		it('spaced(' + `${SENTENCE}` + ') => ' + `${SENTENCE}`, () => {
			instance = new Proton();
			expect(Proton.string.spaced(SENTENCE)).toBe(SENTENCE);
		});
		it('escapeHTML(' + `${SENTENCE_WITH_HTML}` + ') => ' + `${SCAPED}`, () => {
			instance = new Proton();
			expect(Proton.string.escapeHTML(SENTENCE_WITH_HTML)).toBe(SCAPED);
		});
		it('between(' + `${SENTENCE_WITH_HTML}` + ', <b>, </b>) => ' + `${SENTENCE}`, () => {
			instance = new Proton();
			expect(Proton.string.between(SENTENCE_WITH_HTML, '<b>', '</b>')).toBe(SENTENCE);
		});
	});

});


/*
// usar los expect siguientes:
expect(x).toEqual(y); // verifica si ambos valores son iguales.
expect(x).toBe(y); // verifica si ambos objetos son iguales.
expect(x).toMatch(pattern); // verifica si el valor pertenece al patrón establecido.
expect(x).toBeDefined()(); // verifica si el valor está definido.
expect(x).toBeUndefined(); // verifica si el valor es indefinido.
expect(x).toBeNull(); // verifica si el valor es nulo.
expect(x).toBeTruthy(); // verifica si el valor es verdadero.
expect(x).toBeFalsy(); // verifica si el valor es falso.
expect(x).toContain(y); // verifica si el valor actual contiene el esperado.
expect(x).toBeLessThan(y); // verifica si el valor actual es menor que el esperado.
expect(x).toBeGreaterThan(y); // verifica si el valor actual es mayor que el esperado.
 */
