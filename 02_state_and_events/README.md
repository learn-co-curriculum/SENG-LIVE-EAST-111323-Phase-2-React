# State and Events

### SWBATs:

- [ ] Explain the importance of state
- [ ] Explain the difference between state and props
- [ ] Observe how to use the useState hook
- [ ] Observe how to use DOM events in React

### Deliverables

#### 1. Add a click event to the 'Dark Mode' button inside the `Header` component:

- Initialize state `isDarkMode` to true

- Define a function 'handleClick' that will toggle and update the `isDarkMode` state

- Attach a 'click' event to the button that invokes the callback function `handleClick`

#### 2. Add a click event to the clap button inside the `ProjectListItem` component:

- Initialize state `clapCounts` set to 0

- Create a function `handleClap` that will increment and update the `clapCounts` state by 1

- Attach a 'click' event to the clap button that invokes the callback function `handleClap`

#### 3. Implement a Filter by project name feature inside the `ProjectList` component:

- Initialize state `searchQuery` set to an empty string

- Add an `onChange` event to the search input field

- When the `onChange` event occurs, update the `searchQuery` state to the value in the input field

- Given the array of `projects`, filter the projects that include the value of the search query

### Events

In React, we add event handlers directly to our JSX. We still must supply the event handler with a callback. For example, if we're trying to implement a click handler on a button, we could do so by passing a callback function to the onClick attribute of an element:

```js
function Counter() {
  return <button onClick={() => console.log("clicked!")}>Click Me</button>;
}
```

Events can only be attached to DOM elements, we can't attach event listeners to our components

We can also create a helper function for the callback:

```js
function Counter() {
  function handleClick(event) {
    console.log(event);
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

This is helpful in the case where we need to introduce additional event handling logic. We can do so without cluttering our JSX

Rather than working with the native event object in the browser, React passes a Synthetic Event object to our event handlers. Synthetic events ensure that you can use the event object in the same way regardless of browser or machine. This comes back to the learn once, write anywhere principle.

Otherwise, events are more or less the same as they are in vanilla JS. With one notable exception being onChange which in React behaves identically to the onInput event

### State

## what is a stateless component?
- static 
- wouldn't store any new changes
- not interactive 
- not using user's input data
- doesn't use "useState" hook
- use props only

## why is it important to understand state and event together?
- events will trigger some changes in our components
- state will determine when a component will re-render


## states and events
- events get triggered  -> causes
- state change -> causes 
- component re-rendering -> causes 
- DOM manipulation

## what is state?
- private data owned by a component 
- state's values can change 
- to initialize, utilize `useState` hook
- state controls how the component behaves 

//array destructuring 
const [ variable, setVariable ] = useState(initialState)

  // const [ count, setCount ] = useState(0) //array destructuring
  
  // const countStateArr = useState(0)
  // console.log(countStateArr)

  // const count = countStateArr[0]
  // const setCount = countStateArr[1]
  //countStateArr === [0, setCount]

  // const arr = useState(0)
  // console.log(arr)
  // // [0, setterfunction]

  // const count = arr[0]
  // const setCount = arr[1]

  // const [count, setCount ] = useState(0)

## What is the difference between props and state:
- Props are immutable, which means they can not be changed; they are read-only.
- State can be changed and updated BUT only in the component that owns it. 


##  Toggle function recap 
- create an onClick event on DOM button in JSX
- attach a handleToggle event handler to the event 
- define the `isDarkMode` state 
- define the setter function, with the `setIsDarkMode`, utilizing ! bang operator on state 
- this causes component re-render
- button changes! DOM manipulation!

State is used for data that needs to be dynamic. Where props are passed down from parents to children and are static, values stored in state are meant to change, especially as the user interacts with the DOM.

This is a key component of declarative programming in React: we tie our components to our state by integrating values in state into logic (e.g. conditional rendering). This way, changes in state eventually cause changes to the DOM.

To work with state in a function component, we use the `useState` hook:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button>Count: {count}</button>;
}
```

When we call `useState(0)` inside the function component, that creates a new "state variable" which our function gets access to. That new state variable has an initial value of 0 (or whatever we pass into useState when we call it)

`useState` will return an array of two elements:

- count: the current value for the state variable
- setCount: a setter function to update the state variable

To update a state variable, we use its setter function:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

Calling the setter function does two things:

- It updates the state variable to some new value
- It causes our component to re-render and update the DOM

### Resources

- [React Docs - Events](https://reactjs.org/docs/events.html)
- [React Docs - Hooks](https://reactjs.org/docs/hooks-overview.html)
- [React Docs - Functional State Updates](https://reactjs.org/docs/hooks-reference.html#functional-updates)
- [React Docs - Stale State Problem](https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
