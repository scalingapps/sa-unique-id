import { SaUniqueIdInterface } from './index.d'

export class SaUniqueId implements SaUniqueIdInterface {
	id(): string {
		let ms: string = '' + (new Date()).getTime();
		if (ms.length < 13) {
			ms = ms.padEnd(13, '0');
		}
		const array: Uint32Array = new Uint32Array(1);
		window.crypto.getRandomValues(array);
		let str: string = '' + array[0];
		if (str.length < 10) {
			str = str.padStart(10, '0');
		}
		return `${ ms }${ str }`;
	}
}
