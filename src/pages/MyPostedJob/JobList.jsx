import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({jobsCreatedByPromise}) => {
    const jobs = use(jobsCreatedByPromise)
    return (
        <div>
            <h2 className="text-3xl">Jobs By created By you{jobs.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Job Title</th>
        <th>Job Deadline</th>
        <th>View Application</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            jobs.map((job,index) =><tr key={job._id}>
        <th>{index+1}</th>
        <td>{job.title}</td>
        <td>{job.deadline}</td>
        <td><Link to={`/applications/${job._id}`}>view applications</Link></td>
      </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default JobList;