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
## 