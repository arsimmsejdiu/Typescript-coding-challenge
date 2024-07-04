// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

export function timeConversion(s: string): string {
    // Extract the period (AM/PM)
    const period = s.slice(-2);
    // Extract the hour, minute and second
    let [hour, minute, second] = s.slice(0, 8).split(":");

    // Convert hour to number for arithmetic operations
    let hourNum = parseInt(hour);

    if(period === "AM") {
        if(hourNum === 12) {
            hour = "00" // Midnight case
        }
    } else { // PM case
        if(hourNum !== 12) {
            hourNum += 12;
            hour = hourNum.toString();
        }
    }

    return `${hour}:${minute}:${second}`;
}

// Explanation

// 	1.	Extract the period (AM/PM):
// 	•	const period = s.slice(-2); gets the last two characters of the string which represent AM or PM.
// 	2.	Extract the hour, minute, and second:
// 	•	let [hour, minute, second] = s.slice(0, 8).split(':'); splits the time string (excluding AM/PM) into hour, minute, and second components.
// 	3.	Convert hour to number:
// 	•	let hourNum = parseInt(hour); converts the hour string to a number for arithmetic operations.
// 	4.	Handle AM/PM conversion:
// 	•	If the period is “AM” and the hour is 12, set the hour to “00” (midnight).
// 	•	If the period is “PM” and the hour is not 12, add 12 to the hour to convert to 24-hour format.
// 	5.	Return the converted time:
// 	•	The result is constructed and returned in the format ${hour}:${minute}:${second}.
