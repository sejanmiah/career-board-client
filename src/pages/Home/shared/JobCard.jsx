import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    salaryRange,
    location,
    requirements,
    jobType,
    company_logo,
    category,
    applicationDeadline,
    company,
    description,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center gap-3">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="flex items-center">
            {" "}
            <FaMapMarkerAlt></FaMapMarkerAlt> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{location}</p>
        <p>
          sellary {salaryRange.min} - {salaryRange.max} {salaryRange.currency}{" "}
        </p>
        <p>{description}</p>
        <div className="card-actions justify-start">
          {requirements.map((skil, index) => (
            <div key={index} className="badge badge-outline">
              {skil}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
            <Link to={`jobs/${_id}`}> <button className="btn btn-primary">Details</button> </Link>
         
        </div>
      </div>
    </div>
  );
};

export default JobCard;
