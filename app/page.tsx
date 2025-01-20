// // app/page.tsx 



// import React, { useState } from 'react';

// const Counter: React.FC = () => {
//   const [count, setCount] = useState<number>(0);

//   const increment = () => {
//     // This might lead to an unexpected behavior when called multiple times quickly
//     //Problem: When setCount is called multiple times in quick succession 
//     // (e.g., if the button is clicked rapidly), React batches these updates, 
//     // and the state updates might not work as expected. This happens because 
//     // count is a stale value within the closure of the increment function.
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default Counter;


// // Solution
// // To fix this, use the functional form of setCount to 
// // ensure you’re always working with the latest state value:

// // tsx
// // Copy
// // setCount((prevCount) => prevCount + 1);

"use client"; // Ensure this is at the top

import React, { useState } from 'react';

const InputForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Ignoring side effects: What if inputValue is an empty string?
    if (inputValue) {
      setSubmittedValue(inputValue);
      setInputValue(''); // Clear input after submission
    }
    // Missing edge case: What happens if inputValue is whitespace?
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Input Field" // Lacks sufficient accessibility attributes
          aria-required="true" // Missing required attribute for better accessibility
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>Submitted Value: {submittedValue}</p>}
    </div>
  );
};

export default InputForm;



//the corrected version after test
// import React, { useState } from 'react';

// const InputForm: React.FC = () => {
//   const [inputValue, setInputValue] = useState<string>('');
//   const [submittedValue, setSubmittedValue] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null); // State for error message

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     // Check for empty or whitespace-only input
//     if (!inputValue.trim()) {
//       setError('Input cannot be empty or whitespace!'); // Set error message
//       return;
//     }

//     setSubmittedValue(inputValue);
//     setInputValue(''); // Clear the input after submission
//     setError(null); // Clear any previous error
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         required // Mark the input as required
//         aria-required="true" // Optional: for better accessibility
//       />
//       <button type="submit">Submit</button>
//       {submittedValue && <p>Submitted Value: {submittedValue}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
//     </form>
//   );
// };

// export default InputForm;
