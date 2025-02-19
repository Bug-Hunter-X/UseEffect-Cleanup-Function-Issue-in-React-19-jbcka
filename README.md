# useEffect Cleanup Function Issue in React 19

This repository demonstrates a potential issue with the useEffect hook's cleanup function in React 19.  The cleanup function, which is essential for resource management (e.g., unsubscribing from events, clearing intervals), might not behave as expected under specific circumstances.

The `bug.js` file showcases a simple component with a `useEffect` hook, which includes a `console.log` in both the effect and the cleanup function.  Under normal operations, you would expect to see the 'Effect ran' and 'Cleanup function ran' messages in the console. However, depending on how the component is unmounted or updated, issues might arise.

The `bugSolution.js` file offers a potential solution, addressing the issues highlighted in `bug.js`, ensuring the cleanup function runs reliably.

## How to reproduce:

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server. 
4. Observe the console output and trigger potential edge cases (e.g., rapidly changing states, component unmounting).