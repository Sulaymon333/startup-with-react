# React

## Hooks

### UseState

-   causes rerender
-   preserves values between rerended
-   strings, numbers, arrays, objects (copy/spread old obj)
-   value and functional updates
-   cannot be outside function body - called at top level
-   cannot be called conditionally

### UseEffect

-   side effects - fetch data, subscription, listen to events etc.
-   to cause some side effects outside the component
-   causes re-render by default
-   second arg. - dependecy array
-   returns cleanup functions - event attachements, item added and removed and so on
-   no async function inside
-   cannot be called conditionally but we can run condition within it

### fetch with useEffect

-   native fetch api/axios
-   dependency array [] - fetch only once - else infinite loop
-   if condition - isError, isLoading
-   dynamic condition
-   fetch data with useEffect - network error

### Conditional rendering

-   if not allowed, nothing returned

#### Short circuit evaluation

-   function body or inline
-   && and ||
-   || if false render next element, else render prev
-   && if true render next element, else render nothing
-   toggle state / onClick

#### Ternary operator

-   ? :

### cleanup funtion of useEffect

-   show/hide

### forms in React

-   vanilla js forms .value
-   controlled input - multiple state value vs single state value - object - dynamic ibject properties
-   uncrontrolled input - useRef - current.value
-   onSubmit/onClick - type button
-   preventDefault()
-   check empty and reset after submit

### useRef

-   preserves value between re-renders
-   DOES NOT trigger a re-render event
-   for targetting DOM nodes/elements
-   .current.value
-   focus element on load - form input - useEffect - .current.focus

### useReducer

-   a better and more secure way to update a local state - redux like paradigm
-   accepts two arguments - reducer and initialState
-   returns - state and dispatch
-   reducer accepts - state and action
-   state can only be updated by dispatching action via reducer
-   reducer accepts - state and action
-   reducer is a function that takes in old state and returns new updated state based on the action fired via dispatch
-   action object has type and payload
-   action.type determines what action causes what effect
-   action.payload helps to accepts extra data with action like id, modified data, new data, and so on

### prop drilling

-   pass props around intermediate component where they are not used
-   App -> List -> SingleItem (removeItem functionality)
-   solved wuth redux or context api from react

### comtext api

-   solves the problem of prop drilling
-   global store for the app state
-   needs React.createContext() that returns Provider and consumer
-   Provider is like a distributor
-   Only provider is used with useContext hook
-   wrap Context.Provider with the root component
-   access value with useContext(Context) inside any component nested within the root component wrapped with context provider

### custom hooks

-   reuse hook functionality
-   useFetch, useWindowSize

### propTypes

-

### react router

-   BroswerRouter - wraps all Routes
-   Route - wraps the component to link to. accepts - path, exact, component, etc.
-   exact - ensures only exact path matching `Route` is returned
-   path - specifies link address for a component
-   component - component to be rendered within a route
-   Switch - in between `BroswerRouter` and `Routes` to ensure only first matching `Route` is returned
-   Link, to link to a specific page. Just like Anchor tag `a`. accepts `to` to specify link address
-   url parameters, children - placeholder
-   useParams - specifies dynamic address for a specific item

## performance optimization

-   react is fast by itself
-   use these tools with caution and when it is absolutely required
-   optimization has costs as well
-   memoizing - caching/remembering state

### React.memo

-   React.memo memoize the `props value` of a compoent and prevent re-render of the component if the prop has not change

### useCallback

-   useCallback hook prevents re-rendering of a component if the value of a function passed as props has not changed
-   without second argument of dependency array, useCallback hook still won't have any effect and there will be still many re-renders due to function being recreated
-   requires dependency array to receate the function whenever a value of the function changes
-   empty depency array will make the value of the function to be stocked at first update after initial re-render

### useMemo

-   `useMomo` hook memoize value and not props
-   only causes a re-rendder if the value of the dependency of the useMemo changes
