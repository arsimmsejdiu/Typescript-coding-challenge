/*
We'd like you to write a calculator to perform basic arithmetic, but using an alternative syntax for writing the expressions.

In this alternative notation, the operators precede the operands. For example while in traditional notation we might write , instead we would write .

The main advantage of this format is that it does not require parentheses for any ambiguous expression.

Traditional notation	Alternative notation
3 + 4	+ 3 4
3 - (4 * 5)	- 3 * 4 5
(3 + 4) * 5	* + 3 4 5
(3 - 4) / (5 + 2)	/ - 3 4 + 5 2
In the code provided, the  file exports a  function. This function is expected to take an alternative expression as a string, and output the numerical solution.

We have included some tests to check this function works as expected.

To run the code:

Please implement the calculate function to solve expressions in the alternative format as expected.
*/

export function expression(expression: string): number {
    const tokens: string[] = expression.split(' ');

    function evaluate(tokens: string[]): number {
        const token: string | undefined = tokens.shift();

        if (!token) {
            throw new Error('Invalid expression: empty token');
        }

        if (token === '+') {
            return evaluate(tokens) + evaluate(tokens);
        } else if (token === '-') {
            return evaluate(tokens) - evaluate(tokens);
        } else if (token === '*') {
            return evaluate(tokens) * evaluate(tokens);
        } else if (token === '/') {
            return evaluate(tokens) / evaluate(tokens);
        } else {
            const num: number = parseInt(token);
            if (isNaN(num)) {
                throw new Error(`Invalid token: ${token}`);
            }
            return num;
        }
    }

    return evaluate(tokens);
}
