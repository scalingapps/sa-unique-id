"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaUniqueId = void 0;
class SaUniqueId {
    id() {
        let ms = '' + (new Date()).getTime();
        if (ms.length < 13) {
            ms = ms.padEnd(13, '0');
        }
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        let str = '' + array[0];
        if (str.length < 10) {
            str = str.padStart(10, '0');
        }
        return Number(`${ms}${str}`);
    }
}
exports.SaUniqueId = SaUniqueId;
