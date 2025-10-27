# promise-debouncer

A lightweight promise-based debouncer that returns a boolean indicating whether the debounced call completed or was cancelled.

## Installation

```bash
npm install promise-debouncer
```

## Usage

```typescript
import { createDebouncer } from 'promise-debouncer';

// Create a debouncer with 300ms timeout
const debounce = createDebouncer(300);

// Use it in your code
async function handleInput(value: string) {
  const completed = await debounce();
  
  if (completed) {
    // This call completed - do your work
    console.log('Debounce completed, processing:', value);
  } else {
    // This call was cancelled by a newer call
    console.log('Debounce cancelled');
  }
}

// Multiple rapid calls
handleInput('a');  // Will be cancelled
handleInput('ab'); // Will be cancelled
handleInput('abc'); // Will complete after 300ms
```

## API

### `createDebouncer(timeout: number): () => Promise<boolean>`

Creates a debouncer function with the specified timeout.

**Parameters:**
- `timeout` (number): The debounce delay in milliseconds

**Returns:**
A debouncer function that returns a Promise resolving to:
- `true` if the debounced call completed
- `false` if the call was cancelled by a subsequent call

## Features

- 🪶 Lightweight - Zero dependencies
- 📦 TypeScript support included
- ⚡ Promise-based API
- ✅ Returns completion status
- 🎯 Simple and intuitive

## License

MIT

