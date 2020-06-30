"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaUniqueId = void 0;
class SaUniqueId {
    id() {
        let ms = '' + (new Date()).getTime();
        if (ms.length < 13) {
            ms = ms.padEnd(13, '0');
        }
        let str = '';
        if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
            const array = new Uint32Array(1);
            window.crypto.getRandomValues(array);
            str = array[0].toString();
        }
        else {
            // must be node 
            str = require('crypto').randomBytes(5).toString('hex');
        }
        if (str.length < 10) {
            str = str.padStart(10, '0');
        }
        return `${ms}${str}`;
    }
}
exports.SaUniqueId = SaUniqueId;
