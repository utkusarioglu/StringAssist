"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index");
test("toProperCase", () => {
    const test_string = "this is all lower case";
    const result = test_string.toProperCase();
    expect(result).toStrictEqual("This Is All Lower Case");
});
test("minify", () => {
    const test_string = `s 
                        p
                        a
                        c
                        e
                        y
                        `;
    const result = test_string.minify();
    expect(result).toStrictEqual("spacey");
});
test("chop", () => {
    const test_string = "12345678";
    const result = test_string.chop(2);
    expect(result).toStrictEqual(["12", "34", "56", "78"]);
});
test("subs", () => {
    const test_string = "%0 %1 %2";
    const result = test_string.subs("life", "is", "good");
    expect(result).toStrictEqual("life is good");
});
//# sourceMappingURL=index.test.js.map