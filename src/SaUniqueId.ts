export interface SaUniqueIdInterface {
	id(): string
}

export class SaUniqueId implements SaUniqueIdInterface {
	id(): string {
		let ms: string = '' + (new Date()).getTime();
		if (ms.length < 13) {
			ms = ms.padEnd(13, '0');
		}

		let str: string = '';
		if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
			const array: Uint32Array = new Uint32Array(1);
			window.crypto.getRandomValues(array);
			str = array[0].toString();
		} else {
			// must be node 
			str = require('crypto').randomBytes(5).toString('hex');
		}

		if (str.length < 10) {
			str = str.padStart(10, '0');
		}

		return `${ ms }${ str }`;
	}
}
