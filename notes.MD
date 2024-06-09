# React Crash Course 2024

A sing-along project with ["React Crash Course"](https://www.youtube.com/watch?v=LDB4uaJ87e0)
by [Traversy Media](https://www.youtube.com/@TraversyMedia)
[Repository](https://github.com/bradtraversy/react-crash-2024)

## Scaffolding

```shell
$> npm create vite@latest react-crash-course-2024
$> cd .\react-crash-course-2024\
$> npm i
$> npm run dev
$> git init .
```

## Tailwind

Install the dependencies, then setup tailwind config and (via the -p flag) a postcss config file as well

```shell
$> npm i -D tailwindcss postcss autoprefixer
$> npx tailwindcss init -p
```

## Components

Create "components" directory under "src/" directory

- Navbar (imports an asset .svg file)
- Hero (passes props)
- HomeCards (uses nested components)
- Card (wrapper component, uses "children" prop for whatever is wrapped)
- JobListing component
- JobListing component
- ViewAllJobs button component

## State

App State and component state
Requires the "useState" hook

```js
let initialVal                  = 99;
const [stateName, setStateName] = useState(initialVal);
```

## React Icons Package

```shell
$> npm i react-icons
```

Import an icon from react-icons/{subdirectory} and use as a component

## React Router

```shell
$> npm i react-router-dom
```

_App.jsx_

```jsx

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
        </Route>
    ));
    return (
        <RouterProvider router={router}/>
    )
}
export default App
```

### Jobs Page Component & Route

Replacing <a> tags with <link> tags, to prevent full page reload
Conditional rendering

## JSON Server

### Setup

```shell
$> npm i -D json-serer
$> npx json-server jobs.json
```

### Fetching Jobs Data

Fetch data from the json-server using standard `fetch()` function from within `useEffect()`
useEffect() takes 2 parameters: function to execute when variables change, and array of variables to watch.
If the function is async, it cannot be declared as such;
rather, a second, async, function must be called from inside the primary function.

### Loading Spinner

Ref: https://github.com/davidhu2000/react-spinners

```shell
$> npm i react-spinners
```

### API Proxy

Define a proxy in vite.config.js so that any URL that begins with '/api/'
will be redirected to the json-server

## Single Job Page

Use a colon in route paths for wildcards.
Get the ID for the job from the route using the `useParams` hook.

### Data Loader

Rewrite the Single Job page a second way. Instead of fetching the job from within the component,
pass a data loader function to the component, and have the component use the data this loader fetches.
(We defined the loader function in the component file, but this is not necessary.)

