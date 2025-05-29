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
