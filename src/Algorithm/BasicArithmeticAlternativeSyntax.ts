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
