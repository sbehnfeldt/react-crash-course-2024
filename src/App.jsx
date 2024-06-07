import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./pages/JobsPage.jsx";

const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/jobs' element={<JobsPage/>}/>
        </Route>
    ));

    return (
        <RouterProvider router={router}/>
    )
}
export default App
