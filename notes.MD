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
let initialVal = 99;
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

