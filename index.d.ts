// Generated by dts-bundle v0.7.3

declare module '@utkusarioglu/string-assist' {
    global {
        interface String {
            toProperCase: () => string;
            minify: () => string;
            chop: (length?: number) => Array<string>;
            subs: (...substitutions: Array<string>) => string;
        }
    }
    export {};
}

