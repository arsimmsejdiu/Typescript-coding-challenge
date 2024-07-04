// Two players are playing a game of Tower Breakers! Player  always moves first, and both players always play optimally.The rules of the game are as follows:

// Initially there are  towers.
// Each tower is of height .
// The players move in alternating turns.
// In each turn, a player can choose a tower of height  and reduce its height to , where  and  evenly divides .
// If the current player is unable to make a move, they lose the game.
// Given the values of  and , determine which player will win. If the first player wins, return . Otherwise, return .

// Example. 

// There are  towers, each  units tall. Player  has a choice of two moves:
// - remove  pieces from a tower to leave  as 
// - remove  pieces to leave 

// Let Player  remove . Now the towers are  and  units tall.

// Player  matches the move. Now the towers are both  units tall.

// Now Player  has only one move.

// Player  removes  pieces leaving . Towers are  and  units tall.
// Player  matches again. Towers are both  unit tall.

// Player  has no move and loses. Return .

// Function Description

// Complete the towerBreakers function in the editor below.

// towerBreakers has the following paramter(s):

// int n: the number of towers
// int m: the height of each tower
// Returns

// int: the winner of the game
// Input Format

// The first line contains a single integer , the number of test cases.
// Each of the next  lines describes a test case in the form of  space-separated integers,  and .

export function towerBreakers(n: number, m: number): number {
    if (m === 1) {
        return 2
    }
    return n % 2 === 0 ? 2 : 1;
}

// Detailed Explanation

// 	1.	Function Definition:
// 	•	towerBreakers is a TypeScript function that takes two parameters, n and m, both of type number.
// 	•	It returns a single number, which represents the winner of the game based on the rules described.
// 	2.	Checking if m is 1:
// 	•	The condition if (m === 1) checks if the height of each tower (m) is equal to 1.
// 	•	If m === 1, it means that each tower is only 1 unit tall.
// 	•	According to the rules, if the height of each tower is 1, the second player wins because the first player cannot make a move (there are no valid moves to make since you can only reduce the tower height by positive integers that divide the current height evenly).
// 	3.	Returning 2:
// 	•	If m === 1, the function returns 2, indicating that the second player wins.
// 	4.	Determining the Winner based on n:
// 	•	If m !== 1 (meaning the height of each tower is not 1), the function proceeds to the next check.
// 	•	The expression n % 2 === 0 checks if the number of towers (n) is even.
// 	•	If n % 2 === 0, it means there is an even number of towers.
// 	•	According to the rules, if there is an even number of towers, the first player can always mirror the second player’s moves. This strategic advantage allows the first player to win the game.
// 	•	Therefore, in this case (n % 2 === 0), the function returns 2, indicating that the first player wins.
// 	5.	Returning 1:
// 	•	If n % 2 !== 0 (meaning n is odd), the function returns 1.
// 	•	In this scenario, the first player will always face the second player with an even number of towers. Since an odd number of towers is initially given, the first player has an advantage to always win, as there د are خ saw