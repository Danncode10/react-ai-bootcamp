# Lesson 4 – Lists and Keys

## 🧠 What You're Learning:

### 1. `map()` in React

This lets you **loop through a list** (array) and create a React element for each item.

```js
const fruits = ['🍎', '🍌', '🍇'];
fruits.map(fruit => <li>{fruit}</li>)
```

This gives you:

```jsx
<li>🍎</li>
<li>🍌</li>
<li>🍇</li>
```

### 2. `key` prop

React needs **a unique `key`** when rendering lists so it knows which items changed or stayed the same.

```jsx
fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
```

➡️ Without `key`, React gives a warning.
➡️ Use something **unique** if possible (like an `id`), otherwise use the `index`.

---

## 🧪 Let's Build a Simple To-Do List

### ✅ You Do:

We’ll build a **mini app** where:

* You type a task.
* Click **Add**, and it appears in a list.

---

### 🧱 Step-by-step Code:

```jsx
// TodoList.jsx
import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);        // List of todos
  const [input, setInput] = useState('');        // Input field

  // Handle adding a new task
  const handleAdd = () => {
    if (input.trim() !== '') {
      const newTask = {
        id: Date.now(), // unique ID using timestamp
        text: input
      };
      setTasks([...tasks, newTask]); // Add to array
      setInput(''); // Clear input
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>📝 To-Do List</h2>
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        style={{
          padding: '10px',
          width: '70%',
          marginRight: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
      
      <button
        onClick={handleAdd}
        style={{
          padding: '10px 15px',
          backgroundColor: '#4f8cff',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Add
      </button>

      <ul style={{ marginTop: '20px', paddingLeft: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              listStyle: 'none',
              padding: '10px',
              background: '#f2f2f2',
              marginBottom: '8px',
              borderRadius: '4px'
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

---

### Detailed Explanation of the Code

---

```jsx
import React, { useState } from 'react';
```

* **What:** We import React and the `useState` hook from the React library.
* **Why:** `useState` lets us add state (data that changes) inside our functional component.

---

```jsx
function TodoList() {
```

* **What:** This declares a new React component called `TodoList`.
* **Why:** Components are reusable pieces of UI. This one will show a todo list.

---

```jsx
  const [tasks, setTasks] = useState([]);        // List of todos
```

* **What:** This line creates a **state variable** called `tasks` and a function to update it called `setTasks`.
* **Starting value:** `[]` (an empty array), because initially, we have no tasks.
* **Why:** `tasks` will hold all the todo items.

---

```jsx
  const [input, setInput] = useState('');        // Input field
```

* **What:** This creates another state variable called `input` and a function `setInput` to update it.
* **Starting value:** `''` (an empty string), because the input box starts empty.
* **Why:** `input` stores what the user types in the text box.

---

```jsx
  const handleAdd = () => {
```

* **What:** This defines a function called `handleAdd`.
* **Why:** We will call this function when the user clicks the **Add** button to add a new task.

---

```jsx
    if (input.trim() !== '') {
```

* **What:** Check if `input` is not just empty spaces.
* **Why:** We don’t want to add empty tasks — this keeps it clean.

---

```jsx
      const newTask = {
        id: Date.now(), // unique ID using timestamp
        text: input
      };
```

* **What:** Create a new task object.

  * `id`: A unique number using the current time in milliseconds.
  * `text`: The actual task text the user typed.
* **Why:** Each task needs a unique id so React can track it, and the text is what will show on the list.

---

```jsx
      setTasks([...tasks, newTask]); // Add to array
```

* **What:** Update the `tasks` array by creating a new array with all existing tasks (`...tasks`) plus the new one (`newTask`).
* **Why:** We never directly change the old `tasks` array — React prefers new copies for better performance.

---

```jsx
      setInput(''); // Clear input
```

* **What:** Reset the input box to empty after adding the task.
* **Why:** So the user can type a new task without manually deleting the old text.

---

```jsx
    }
  };
```

* **What:** End of the `if` check and the `handleAdd` function.

---

```jsx
  return (
```

* **What:** This starts what the component **renders** on the screen (the UI).

---

```jsx
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
```

* **What:** A container `<div>` with some inline CSS styles.
* **Why:** Padding for space inside, max width to limit size, margin auto to center it horizontally.

---

```jsx
      <h2>📝 To-Do List</h2>
```

* **What:** A heading title for the list.

---

```jsx
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        style={{
          padding: '10px',
          width: '70%',
          marginRight: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
```

* **What:** An input box for typing a new task.
* `value={input}` means the input box shows what’s inside our `input` state.
* `onChange={(e) => setInput(e.target.value)}` means when the user types, update the `input` state with the current text.
* `placeholder` is the gray text that shows when the box is empty.
* `style` adds some nice spacing and border styles.

---

```jsx
      <button
        onClick={handleAdd}
        style={{
          padding: '10px 15px',
          backgroundColor: '#4f8cff',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Add
      </button>
```

* **What:** A button labeled “Add”.
* `onClick={handleAdd}` means when clicked, it runs the `handleAdd` function we defined earlier to add a new task.
* Style makes the button look nice with color, padding, and rounded corners.

---

```jsx
      <ul style={{ marginTop: '20px', paddingLeft: 0 }}>
```

* **What:** An unordered list `<ul>` to hold the tasks.
* `marginTop` and `paddingLeft` style the list spacing.

---

```jsx
        {tasks.map((task) => (
```

* **What:** Loop over the `tasks` array using `map`.
* For every `task` in the array, we create an `<li>` (list item).

---

```jsx
          <li
            key={task.id}
            style={{
              listStyle: 'none',
              padding: '10px',
              background: '#f2f2f2',
              marginBottom: '8px',
              borderRadius: '4px'
            }}
          >
            {task.text}
          </li>
```

* **What:** Render a list item (`<li>`) for each task.
* `key={task.id}` gives React a unique ID to track the item.
* Style removes bullet points and adds spacing/background.
* `{task.text}` shows the actual task text.

---

```jsx
        ))}
      </ul>
    </div>
  );
}
```

* **What:** Close all the tags and complete the return statement.

---

```jsx
export default TodoList;
```

* **What:** Make this component available to be imported and used elsewhere.

---

### Summary:

* We use **two states:** `tasks` (array of todos) and `input` (current input text).
* We update state properly, never mutate directly.
* The UI updates automatically when state changes.
* `map()` turns the array of todos into a list of JSX elements.
* We give each list item a unique `key` so React can efficiently track them.

---

## 💡 What You Just Did:

| Concept                 | Where It Happens                         |
| ----------------------- | ---------------------------------------- |
| `useState([])`          | For the list of tasks                    |
| `map()`                 | To render each task as a `<li>`          |
| `key={task.id}`         | So React tracks the list efficiently     |
| `onChange` + `setInput` | To track what's typed into the box       |
| `onClick={handleAdd}`   | Adds a new task when clicking the button |

---

## 👩‍🔧 Next Improvements (Optional):

* Add a **Delete** button for each task.
* Add **Edit** functionality.
* Save to-dos to local storage (so they don’t disappear on refresh).

---

Let me know if you'd like me to explain the delete or edit feature next — or go to Lesson 5: `useEffect` and Data Loading!
