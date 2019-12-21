
/* ////////////////////////////////////////////////////////////////////////////
 *
 *	IMPORTS
 *
 * ///////////////////////////////////////////////////////////////////////// */

import { C_StringAssist } from "./c_index";






/* ////////////////////////////////////////////////////////////////////////////
 *
 *	GLOBALS
 *
 * ///////////////////////////////////////////////////////////////////////// */

declare global {

    interface String {

        /** Converts the string to uppercase */
        toProperCase: () => string;

        /** Removes the spaces from string */
        minify: () => string;

        /** splits string into sections with equal lengths */
        chop: (length?: number) => Array<string>;

        /**
         * Substitutes the given strings into the consuming string
         * by replacing %0, %1, ... in sequence.
         * */
        subs: (...substitutions: Array<string>) => string;
    }

}

String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, (txt) =>
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

String.prototype.minify = function() {
    return this.replace(/\s/g, "");
};

String.prototype.chop = function (length: number = 50): Array<string> {
    const regexp = new RegExp(`.{1,${length}}`, "g");
    return (this as string).match(regexp) || [];
}

String.prototype.subs = function (
    ...substitutions: string[]
): string {
    return substitutions.reduce((prev, current, index) => {
        return prev.replace(`%${index}`, current);
    }, this) as string;
}