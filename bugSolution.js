import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Use isMounted to ensure that the cleanup function only runs if the component is still mounted.
    let effectActive = true;
    console.log('Effect ran');
    const cleanup = () => {
      console.log('Cleanup function ran');
      effectActive = false;
    };
    return () => {
      if(effectActive){
        cleanup();
      }
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}