"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaUniqueId = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./SaUniqueId.interface"), exports);
/**
 * @class SaUniqueId (browser)
 * @description
 * Implements id() method that returns a unique id that is 13 chars long
 */
exports.SaUniqueId = class {
    static id() {
        let ms = '' + new Date().getTime();
        if (ms.length < 13) {
            ms = ms.padEnd(13, '0');
        }
        let str = '';
        if (typeof window !== 'undefined' &&
            window.crypto &&
            window.crypto.getRandomValues) {
            const array = new Uint32Array(1);
            window.crypto.getRandomValues(array);
            str = array[0].toString();
        }
        else {
            // throw error
            throw Error('Browser does not support window.crypto.getRandomValues');
        }
        if (str.length < 10) {
            str = str.padStart(10, '0');
        }
        return `${ms}${str}`;
    }
};
