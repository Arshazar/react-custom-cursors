declare const _default: ({
    input: string;
    output: {
        file: any;
        format: string;
        sourcemap: boolean;
    }[];
    plugins: any[];
    external: string[];
} | {
    input: string;
    output: {
        file: string;
        format: string;
    }[];
    plugins: import("rollup").Plugin[];
    external: RegExp[];
})[];
export default _default;
