import React, { use } from 'react';
import ApplicationsRows from './ApplicationsRows';

const ApplicationList = ({myApplicationsPromise}) => {
    const applications = use(myApplicationsPromise)
    return (
        <div>
            <h1>Application List</h1>
            <div className="text-3xl">Job Apply tottal {applications.length }</div>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   {
    applications.map((application,index) => <ApplicationsRows key={application._id} index={index} application={application}></ApplicationsRows>)
   }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ApplicationList;