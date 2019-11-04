"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};
String.prototype.minify = function () {
    return this.replace(/\s/g, "");
};
String.prototype.chop = function (length) {
    if (length === void 0) { length = 50; }
    var regexp = new RegExp(".{1," + length + "}", "g");
    return this.match(regexp) || [];
};
String.prototype.subs = function () {
    var substitutions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        substitutions[_i] = arguments[_i];
    }
    return substitutions.reduce(function (prev, current, index) {
        return prev.replace("%" + index, current);
    }, this);
};
//# sourceMappingURL=string-assist.js.map