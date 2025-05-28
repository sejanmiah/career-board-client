import React, { Suspense } from "react";
import AppicationsStats from "./AppicationsStats";
import ApplicationList from "./ApplicationList";

const MyApplication = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl font-bold my-5">my application</h1>
      <AppicationsStats></AppicationsStats>
      <Suspense fallback={"loading your application"}>
        <ApplicationList></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplication;
