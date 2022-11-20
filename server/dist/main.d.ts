declare module "index" { }
declare module "components/calculator" {
    export const add: (a: number, b: number) => number;
    export const subtract: (a: number, b: number) => number;
    export const multiply: (a: number, b: number) => number;
    export const divide: (a: number, b: number) => number;
}
