# 📘 **Lesson 1: Getting Started with React**

🧠 *Goal: Understand what React is and set up your first working React project.*

---

## 🔍 What is React? (Simple Explanation)

> React is like Lego for web apps. You build your page out of **small, reusable blocks** called **components**.

Imagine a webpage is made of blocks:

* A **Header** block
* A **ProfileCard** block
* A **Button** block
* A **Footer** block

Instead of rewriting HTML and JavaScript every time, React lets you:
✅ Write these blocks once
✅ Reuse them everywhere
✅ Easily update their content (like name, text, image) using **props** and **state**

### 🧠 Think of it like:

* JavaScript is the **brain**
* Bootstrap/Tailwind is the **style**
* React is the **architecture** or **skeleton** that puts everything together

---

## ⚙️ How to Set Up React

There are 2 main ways:

1. `create-react-app` – All-in-one starter tool from React team
2. `Vite` – Super fast modern tool (preferred by pros for speed)

### Let's use Vite (faster and modern)

#### 🧪 Step-by-Step Setup with Vite

✅ Requirements:

* Node.js and npm installed
* VS Code installed

#### 1. Open your terminal and type:

```bash
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
npm run dev
```

---

##### ✅ What To Do Now:

When you see:

```
◆  Select a framework:
│  ● Vanilla
│  ○ Vue
│  ○ React
...
```

##### 👉 Use your arrow keys to select:

```
○ React
```

Then press **Enter**.

---

##### ⏭️ Next Steps (after selecting React):

1. You’ll likely be asked:

   ```
   ✔ Select a variant: › JavaScript
   ```

   * ✅ Just select **JavaScript** (unless you’re doing TypeScript)

2. Then it will say:

   ```
   Scaffolding project in ./my-react-app...
   ```

#### 2. Open `my-react-app` in VS Code

You’ll see a folder structure like this:

```
my-react-app/
├── public/
├── src/
│   ├── App.jsx  ← this is your main component
│   ├── main.jsx ← this starts the app
├── index.html   ← the single HTML page
├── package.json ← lists all tools and dependencies
```

---

## 🧱 Build Your First React Component

Inside `src/App.jsx`:

```jsx
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default App;
```

Then open your browser (usually at [http://localhost:5173](http://localhost:5173)) — and 🎉 BOOM! You’ll see your first working React app.

---

## 💡 Real Dev Tip

🧑‍💻 **Search GitHub**: Type `React Vite starter template` on GitHub.
Compare how others organize their folders, or copy layout ideas.

🧑‍💻 **Use CodeSandbox**: Search for ready-made UI snippets like `React Profile Card UI`.
Copy the component, paste it into your app, and tweak it!

---

## ✅ What You Should Do for Practice

🧪 Try this simple project:

* Create a folder using Vite
* Replace the default `App.jsx` with your own message
* Try adding an `<img />` or `<button>`

---

## 📌 Recap Summary (In Plain Words)

| Concept       | Meaning                                                    |
| ------------- | ---------------------------------------------------------- |
| **React**     | JavaScript library for building UI using components        |
| **Component** | A reusable piece of UI (like a function that returns HTML) |
| **JSX**       | A mix of HTML + JS used in React                           |
| **Vite**      | A tool to create and run React projects quickly            |
| **App.jsx**   | The file where your main component lives                   |

---

## 🧠 Quick AI Tip

Ask me or Copilot:

> “Give me a basic React starter with a header and button.”
> Then explore, delete parts, change text, add more UI — that’s how real devs learn!