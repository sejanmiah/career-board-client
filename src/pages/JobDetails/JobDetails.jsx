import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title,_id} = useLoaderData()
    return (
        <div>
            <h1>This is Job Detials</h1>
            <p>{title}</p>
            <Link to={`/jobapply/${_id}`}>
            <button className='btn btn-accent'>Appy Now</button></Link>
        </div>
    );
};

export default JobDetails;