import JobCard from "./shared/JobCard";

const HotJobs = ({jobs}) => {
    const allJobs = jobs;
    console.log(allJobs);
    return (
        <div>
            <h2 className="text-4xl my-10 text-center">Hot jobs of the day</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-content-center place-items-center">
                {
                    allJobs.map(job => <JobCard key={job._id} job={job}></JobCard> )
                }
            </div>
        </div>
    );
};

export default HotJobs;