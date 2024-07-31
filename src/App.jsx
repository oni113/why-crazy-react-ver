import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import JobFormPage from './pages/JobFormPage';

const App = () => {
    const addJob = async (newJob) => {
        const res = await fetch('/api/recruit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });
        return res;
    };

    const editJob = async (job) => {
        const res = await fetch(`/api/recruit/${job.recruitId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });
        return res;
    };

    const deleteJob = async (recruitId) => {
        const res = await fetch(`/api/recruit/${recruitId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/add-job' element={<JobFormPage saveJobSubmit={addJob}/>} loader={ jobLoader }/>
                <Route path='/jobs' element={<JobsPage/>}/>
                <Route path='/jobs/:recruitId' element={<JobPage deleteJob={deleteJob}/>} loader={ jobLoader }/>
                <Route path='/edit-job/:recruitId' element={<JobFormPage saveJobSubmit={editJob}/>} loader={ jobLoader }/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        )
    );

    return (
        <RouterProvider router={router}/>
    )
}

export default App;
