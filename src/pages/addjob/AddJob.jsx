import React from "react";
import UseAuth from "../../hooks/UseAuth";

const AddJob = () => {
    const {user} = UseAuth()
    console.log(user);
    
    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries())
        console.log(data);
    }
  return (
    <div>
      <h1>Add Job Is here</h1>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic info</legend>

          <label className="label">Title</label>
          <input type="text" name="title" className="input" placeholder="job title" />

          <label className="label">Company</label>
          <input type="text" name="Company Name" className="input" placeholder="Company Name" />

          <label className="label">Location</label>
          <input type="text" name="location" className="input" placeholder="Your Location" />

          <label className="label">Company Logo</label>
          <input type="text" name="logo_logo" className="input" placeholder="Comapany Logo url" />
        </fieldset>
        {/* {Job Type} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>


        <div className="filter">
            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
            <input className="btn" type="radio" name="jobType" aria-label="On-Site"/>
            <input className="btn" type="radio" name="jobType" aria-label="Remote"/>
            <input className="btn" type="radio" name="jobType" aria-label="Hybrid"/>
        </div>

        </fieldset>
        {/* {Job Category} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>

            <select defaultValue="Job Category" className="select">
                <option disabled={true}>Job Category</option>
                <option>Engineering</option>
                <option>Accountant</option>
                <option>Finance</option>
                <option>Web Developer</option>
            </select>

        </fieldset>
        {/* {Application Deadline} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>

            <input type="date" className="input" />

        </fieldset>
        {/* {salary Range} */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">salary Range</legend>

                <label className="label">Salary Minimum</label>
                <input type="text" name="min" className="input" placeholder="Salary Minimum" />

                <label className="label">Salary Maximum</label>
                <input type="text" name="max" className="input" placeholder="Salary Maximum" />

                <label className="label">Currency</label>
                    <select defaultValue="Select Currency" name="currency" className="select">
                        <option disabled={true}>Select Currency</option>
                        <option>BDT</option>
                        <option>AED</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
            </fieldset>


        {/* {Description} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic info</legend>


           <textarea className="textarea" name="description" placeholder="description"></textarea>
        </fieldset>

        {/* {Job Requirment} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">JOb Requirment</legend>


             <textarea className="textarea" name="job_requirsment" placeholder="Plase put the comma"></textarea>
        </fieldset>


             {/* {Job Responsibility} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibility</legend>


             <textarea className="textarea" name="job_responsibility" placeholder="Job Responsibility"></textarea>
        </fieldset>

      {/* {job Description} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>


           <textarea className="textarea" name="job_description" placeholder="Job Description"></textarea>
        </fieldset>



        {/* {Hr} */}
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Hr Related info</legend>

          <label className="label">HR Name</label>
          <input type="text"  name="hr_name" className="input" placeholder="HR Name" />

          <label className="label">HR Email</label>
          <input type="email" name="hr_email" className="input" defaultValue={user.email} placeholder="HR Email" />

          {/* <label className="label">Company Logo</label>
          <input type="text" name="logo_logo" className="input" placeholder="Comapany Logo url" /> */}
        </fieldset>
    

    <input type="submit" className="btn" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
