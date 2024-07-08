/*
    
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. 
Each person wears a sticker indicating their initial position in the queue from  to . 
Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example

q=[1,2,3,5,4,6,7,8]

If person  bribes person , the queue will look like this: . Only  bribe is required. Print 1.


Person  had to bribe  people to get to the current position. Print Too chaotic.

Function Description

Complete the function minimumBribes in the editor below.

minimumBribes has the following parameter(s):

int q[n]: the positions of the people after all bribes
Returns

No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
Input Format

The first line contains an integer , the number of test cases.

Each of the next  pairs of lines are as follows:
- The first line contains an integer , the number of people in the queue
- The second line has  space-separated integers describing the final state of the queue.
*/

export function minimumBribes(q: number[]): void {
	const n = q.length;
	let bribes = 0;
	for (let i = n - 1; i >= 0; i--) {
        // If any person has moved more than two positions ahead, it's too chaotic
		if (q[i] - (i + 1) > 2) {
			console.log("Too chaotic");
			return;
		}
        // Start checking from max(0, q[i] - 2) to current index
		for (let j = Math.max(0, q[i] - 2); j < i; j++) {
			if (q[j] > q[i]) bribes++;
		}
	}
	console.log(bribes);
}

/*

	1.	Bribes Calculation:
	•	The outer loop runs from the end of the array to the beginning.
	•	The condition q[i] - (i + 1) > 2 checks if the person has moved more than two positions ahead, which is not allowed.
	•	The inner loop runs from the maximum of 0 and q[i] - 2 (because a person can only bribe two others) to the current position i. It counts how many people with higher numbers are in front of q[i], which indicates how many times q[i] has been bribed.
	2.	Too Chaotic:
	•	If any person has moved more than two positions ahead, we mark the state as “too chaotic” and break out of the loop.
	3.	Output:
	•	If the queue is too chaotic, print “Too chaotic”.
	•	Otherwise, print the total number of bribes.

	4.	Limit Inner Loop Range: Instead of iterating from the start of the array, the inner loop starts from Math.max(0, q[i] - 2). This ensures we only check positions where a person could have legally moved due to bribes (i.e., within the last two positions in front of them).
	5.	Early Exit on Chaotic State: If a person has moved more than two positions ahead, we immediately print “Too chaotic” and return, avoiding unnecessary computations.

Complexity Analysis

	•	Time Complexity: The outer loop runs O(n) times, where n is the number of people in the queue. The inner loop runs a constant number of times (at most 3 times) for each person. Hence, the overall time complexity is O(n).
	•	Space Complexity: The function uses a constant amount of additional space, so the space complexity is O(1).
*/