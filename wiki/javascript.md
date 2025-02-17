# Javascript
- A programming language primarily used for making websites interactive and dynamic
  - Dynamic behavior: JavaScript enables dynamic content on websites, like animations, form validations, interactive maps, and real-time updates.
  - Runs in the browser: JavaScript is often run directly in your web browser (e.g., Chrome, Firefox) without needing extra software.
  - Versatility: While it started on the web, JavaScript can now be used for server-side programming (e.g., with Node.js) and even mobile app development (e.g., React Native).

# React
- A javascript library (not a framework) that helps build user interfaces (UIs)
- Developed by Facebook (Meta)

### Key Features of React
- Reusable components
- Declarative Syntax
- Performance
- Flexibility


1. Component-Based Architecture
    - Small reusable components
```js
// This is a funcional component that render HTML (in JSX)
const Greeting = (props) => {
return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Alice" />

```
2. JSX (JavaScript XML)
   - Syntax extension used by React that looks like HTML and allows developer to write HTML elements in javascript.

3. Virtual DOM 
   - By using the Virtual DOM React only re-renders the parts of the web page that are necessary. 
   - This makes React more efficient and improves performance.
   
4. State Management
   - Components can have state which holds data that changes.
   - The UI automatically updates or re-renders when state is changed.

5. Properties (Props)
   - Data that is passed from a parent component to a child component.
   - Props are immutable. They cannot be changed in child component, only the parent.

6. React Hooks
    - Hooks allow state and other React features in function components
    - The most common hook is `useState`

7. React Router
    - A popular library used with React to manage routing. 
```js
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}
```

8. React Native (Mobile Development)
    - Used to build cross-platform mobile apps for iOS and Android using the same React knowledge and components.

### Testing
- React Testing Library (RTL)
- Jest

### React vs Other Frameworks (Angular, Vue)
- Angular (full-fledged framework) comes with more built-in tools(form handling, routing) while React lets you pick your tools
- Vue (another library) is similar to React but is less opinionated and is more flexible. Making it easier to get started with for smaller projects.