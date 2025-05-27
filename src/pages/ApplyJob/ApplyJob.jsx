import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";

const ApplyJob = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  console.log(jobId, user);


  const handleApplyFromSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const rusume = form.rusume.value;
    console.log(linkedin,github,rusume);
  }
  return (
    <div>
      <h1>Apply Job</h1> 
      <Link to={`/jobs/${jobId}`}>Details</Link>

      <form onSubmit={handleApplyFromSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Apply</legend>

          <label className="label">Linkdin</label>
          <input type="url" name="linkedin" className="input" placeholder="Linkdin Profile Link" />

          <label className="label">Git Hub</label>
          <input type="url" name="github" className="input" placeholder="Git Hub Link" />

          <label className="label">Rusume Link</label>
          <input type="url" name="rusume" className="input" placeholder="Rusume Link" />

          <input type="submit" className="btn btn-active" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default ApplyJob;
