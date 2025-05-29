import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  // Default values দিয়ে destructure করো
  const {
    _id,
    title,
    salaryRange = {}, // default empty object
    location,
    requirements = [], // default empty array
    company_logo,
    description,
  } = job || {}; // job নিজেই undefined হলে empty object

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center gap-3">
        <figure>
          <img src={company_logo} alt="Company Logo" />
        </figure>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="flex items-center">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{location}</p>
        
        {/* Salary range check করে দেখাও */}
        {salaryRange.min && salaryRange.max && (
          <p>
            Salary {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
        )}
        
        <p>{description}</p>
        
        <div className="card-actions justify-start">
          {/* requirements এর জন্য safe mapping */}
          {requirements && requirements.length > 0 && requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        
        <div className="card-actions justify-end">
          <Link to={`jobs/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;