// setTimeout(callback, delay, ...args)
// callback: Function to execute after the delay.
// delay: Time in milliseconds to wait before executing the function.
// ...args: Additional arguments passed to the callback.
// Example:


// console.log('Start');

// setTimeout((name) => {
//   console.log(`Hello, ${name}!`);
// }, 2000, 'Sathishkumar'); // Executes after 2 seconds

// console.log('End');

////
// clearTimeout(timeoutId)
// /timeoutId: The identifier returned by setTimeout().

// const timerId = setTimeout(() => {
//     console.log('This will not run');
//   }, 2000);
  
//   clearTimeout(timerId); // Cancels the timeout
//   console.log('Timeout cleared');

//  real time use 

// let typingTimeout;

// const handleUserInput = (input) => {
//    clearTimeout(typingTimeout); // Clear any previous timeout

//   typingTimeout = setTimeout(() => {
//     console.log(`Fetching results for: ${input}`);
//     // Call the API to fetch search results based on `input`
//   },1000); // Set timeout to 300ms
// };

// // Simulating user typing
// handleUserInput("N");   // No API call yet
// handleUserInput("No");  // Previous timeout cleared, no API call yet
// handleUserInput("Node"); // Only this API call will go through after 300ms

//////////////////////////////////////////

// setInterval()
// Executes a function repeatedly at specified intervals.

// Syntax:
// setInterval(callback, delay, ...args)

// callback: Function to execute at each interval.
// delay: Time in milliseconds between executions.
// ...args: Additional arguments passed to the callback.

// let count = 0;

// const intervalId = setInterval((name) => {
//   console.log(`Interval count: ${++count} , ${name}`);
//   if (count === 5) {
//     clearInterval(intervalId); 
//   }
// }, 1000 , "sathish"); 

// syntax : clearInterval(intervalId)
// Cancels a setInterval().


//////////////////////////////////////////////////

// setImmediate()
// after all the synchronous code , it execute Immediate
// setImmediate() is designed to execute after the current event loop phase completes
//  and before moving to the next event loop cycle, so it gets priority over setTimeout(fn, 0).

// // Syntax:
// setImmediate(callback, ...args)
// callback: Function to execute immediately.
// ...args: Additional arguments passed to the callback.

// console.log('Before Immediate');

// setImmediate((message) => {
//   console.log(`Executing: ${message}`);
// }, 'Immediate Task');

// console.log('After Immediate');

// console.log('Synchronous 1');

// setImmediate(() => {
//   console.log('setImmediate');
// });

// setTimeout(() => {
//   console.log('setTimeout 0ms');
// });

// console.log('Synchronous 2');  

//clearImmediate()

// Cancels a setImmediate() before it executes.
// const immediateId = setImmediate(() => {

//     console.log('This will not execute');
//   });
  
//   clearImmediate(immediateId); 



///////////////////////////////////////////////////////////////
// process.nextTick()
// Executes a function before the next iteration of the event loop, 
// giving it priority over setTimeout and setImmediate.
// Executes before the next iteration of the event loop starts,
//  even before I/O callbacks or timers.

// // Syntax:
// process.nextTick(callback, ...args)
// callback: Function to execute on the next tick
// ....args: Additional arguments passed to the callback.

// console.log('Before nextTick');

// setImmediate(() => {
//   console.log('setImmediate');
// });

// process.nextTick((name) => {
//   console.log(`Hello, ${name}!`);
// }, 'Node.js');

// console.log('After nextTick');