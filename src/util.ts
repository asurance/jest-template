const reducer = (pre: number, cur: number) => pre + cur

export function Add(...argv: number[]): number {
    return argv.reduce(reducer, 0)
}