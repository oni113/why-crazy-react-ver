import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import JobFormPage from './pages/JobFormPage';
import CompaniesPage from './pages/CompaniesPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SignOutPage from './pages/SignOutPage';
import SignUpPage from './pages/SignUpPage';
import JobService from './services/JobService.js';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/add-job' element={<JobFormPage saveJobSubmit={JobService.addJob}/>} loader={ JobService.getJob }/>
                <Route path='/jobs' element={<JobsPage/>}/>
                <Route path='/jobs/:recruitId' element={<JobPage deleteJob={JobService.deleteJob}/>} loader={ JobService.getJob }/>
                <Route path='/edit-job/:recruitId' element={<JobFormPage saveJobSubmit={JobService.editJob}/>} loader={ JobService.getJob }/>
                <Route path='/companies' element={<CompaniesPage/>}/>
                <Route path='/sign-in' element={<LoginPage/>}/>
                <Route path='/mypage' element={<MyPage/>}/>
                <Route path='/sign-out' element={<SignOutPage/>}/>
                <Route path='/sign-up' element={<SignUpPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        )
    );

    return (
        <RouterProvider router={router}/>
    )
}

export default App;
