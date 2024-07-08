/*
* Truck Tour Problem

You are given a circular route with N petrol pumps. Each petrol pump has a certain amount of petrol and a distance to the next petrol pump. 
You are supposed to start the tour at one of the petrol pumps and complete the tour by visiting each petrol pump exactly once, returning to the starting petrol pump.

Task:
Determine the starting petrol pump index (0-based) from which the truck can complete the entire circle without running out of petrol. If there are multiple solutions, return the smallest index. If it is not possible to complete the circle, return -1.

* Input:

	•	An array of N petrol pumps where each petrol pump is represented as a tuple [petrol, distance]:
	•	petrol is the amount of petrol that the pump provides.
	•	distance is the distance to the next petrol pump.

* Output:

	•	The starting pump index (0-based) from which the truck can complete the circle, or -1 if it is not possible.

* Function signature 
function truckTour(petrolpumps: number[][]): number;

* Example

* Input:
const petrolpumps = [
    [4, 6],
    [6, 5],
    [7, 3],
    [4, 5]
];

* Output:
1

* Explanation:

	•	Start at index 1:
	•	Get 6 units of petrol, travel 5 units (1 unit left).
	•	Get 7 units of petrol, travel 3 units (5 units left).
	•	Get 4 units of petrol, travel 5 units (4 units left).
	•	Get 4 units of petrol, travel 6 units (2 units left).

The truck can complete the circle starting at index 1.

* Constraints:

	•	The length of the array petrolpumps is between 1 and 100,000.
	•	Each pump’s petrol amount and distance to the next pump are between 1 and 1,000,000.

* Solution Approach:

	•	Iterate through each petrol pump and calculate the total petrol balance as the truck visits each pump.
	•	Track the start index and update it whenever the truck cannot proceed due to a negative petrol balance.
	•	Return the start index if the total petrol balance is non-negative after visiting all pumps, otherwise return -1.

*/

// * Full Implementation
export function truckTour(petrolpumps: number[][]): number {
    let total_tank = 0;
    let current_tank = 0;
    let start_index = 0;

    for (let i = 0; i < petrolpumps.length; i++) {
        const [petrol, distance] = petrolpumps[i];
        total_tank += petrol - distance;
        current_tank += petrol - distance;

        if (current_tank < 0) {
            start_index = i + 1;
            current_tank = 0;
        }
    }

    return total_tank >= 0 ? start_index : -1;
}

/*
This line of code is using the array destructuring syntax in TypeScript (and JavaScript ES6+) to unpack the values from the 
petrolPumps[i] array into two separate variables: petrol and distance.

Here's what's happening:

1. petrolPump is an array, where each element is itself an array with two values: the amount of petrol at that pump, and the distance to the next pump.

2. The code is iterating over the petrolPumps array using a loop (likely a for loop), and i represents the current index of the element being processed.

3. petrolPumps[i] retrieves the element at index i from the petrolPumps array. This element is expected to be an array with two values: [petrolAmount, distanceToNextPump].

4. The array destructuring syntax const [petrol, distance] = petrolPumps[i]; unpacks the two values from the array petrolPumps[i] into two separate variables:

- petrol is assigned the first value (the amount of petrol at that pump)

- distance is assigned the second value (the distance to the next pump)

This line of code is a concise way of extracting the two values from the nested array structure of petrolPumps into separate variables, 
making it easier to work with those values individually in the rest of the code.

Array destructuring is a convenient feature in modern JavaScript and TypeScript that allows you to unpack values from arrays (or properties from objects)
into distinct variables in a single line of code, making the code more readable and easier to maintain.
*/