String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};
String.prototype.minify = function () {
    return this.replace(/\s/g, "");
};
String.prototype.chop = function (length = 50) {
    const regexp = new RegExp(`.{1,${length}}`, "g");
    return this.match(regexp) || [];
};
String.prototype.subs = function (...substitutions) {
    return substitutions.reduce((prev, current, index) => {
        return prev.replace(`%${index}`, current);
    }, this);
};
//# sourceMappingURL=string-assist.js.map