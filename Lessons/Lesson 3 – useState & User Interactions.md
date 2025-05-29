# 🧠 **Lesson 3 – useState & User Interactions**

---

## 🧩 What You’ll Learn:

* How to **make your React components "remember things"** (like a counter value or user input)
* What the `useState` **hook** is
* How to **change values when users interact** (clicking buttons, typing, etc.)

---

## 🖼 Imagine This:

You want a button that says:

> “Click me (0 times)”

Then every time you click, it updates to:

> “Click me (1 time)”,
> then “Click me (2 times)”,
> then “Click me (3 times)”…

### 🛑 Without useState:

React would **not remember** how many times you clicked.

### ✅ With useState:

React **remembers the value**, and when it changes, it **automatically re-renders the component** to show the new value.

---

## 🧪 useState: The Simplest Explanation

React gives us a special function called:

```js
useState()
```

You use it like this:

```js
const [value, setValue] = useState(defaultValue);
```

This means:

* `value` is the **current value** (like a variable that React tracks)
* `setValue` is the function to **change that value**
* `useState(0)` — sets the initial value to 0

---

## ✍️ Let’s Build: A Simple Counter

Here’s the complete code (we’ll break it down right after):

```jsx
// Counter.jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>You clicked {count} times</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4f8cff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Counter;
```

---

## 🧠 What’s Happening Here?

| Code                            | What it does                                       |
| ------------------------------- | -------------------------------------------------- |
| `useState(0)`                   | Creates a "remembered" value starting at 0         |
| `[count, setCount]`             | `count` is current value, `setCount` changes it    |
| `onClick={() => setCount(...)}` | When the button is clicked, this updates the count |
| React re-renders the component  | The new count is displayed after every click       |

---

### More details: 


## 🔧 Now Use It in App.jsx

Let’s say you have `App.jsx`, and you want to show your counter:

```jsx
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Lesson 3: useState Hook</h1>
      <Counter />
    </div>
  );
}

export default App;
```

---

## 💡 AI Tip:

Ask ChatGPT something like:

> "Give me a simple React component that uses useState to create a counter with + and – buttons."

Then you can:

* Change colors
* Add icons (like 🔼 and 🔽)
* Set limits (like max = 10)

---

## 🧠 You Try (Mini Exercise):

Create a file: `TextInput.jsx`

Try to build a component that:

* Has an `<input type="text">`
* Shows the text below as the user types

This uses useState too!

---

## ✅ Summary (Like You’re 5)

* **React forgets things** after each change unless you use `useState`
* `useState` helps React **remember values**
* You can update those values when **users click or type**
* When the value changes, **the UI updates**