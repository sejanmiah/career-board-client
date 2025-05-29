import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/JobsApi';

const MyPostedJob = () => {
    const {user} = UseAuth()
    return (
        <div>
            <h1>My Posted Job</h1>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;