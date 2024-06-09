import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import JobPage2, {jobLoader} from "./pages/JobPage2.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";


const App = () => {
    const addJob = async (newJob) => {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });
        return;
    }

    const deleteJob = async (id) => {
        const res = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        });
        return;
    }

    const updateJob = async (updatedJob) => {
        const res = await fetch(`/api/jobs/${updatedJob.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        });
        return;
    }

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/jobs' element={<JobsPage/>}/>
            <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
            <Route path='/jobs/:id' element={<JobPage2 deleteJob={deleteJob}/>} loader={jobLoader}/>
            <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    ));

    return (
        <RouterProvider router={router}/>
    )
}
export default App
