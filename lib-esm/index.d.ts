declare global {
    interface String {
        toProperCase: () => string;
        minify: () => string;
        chop: (length?: number) => Array<string>;
        subs: (...substitutions: Array<string>) => string;
    }
}
export {};
