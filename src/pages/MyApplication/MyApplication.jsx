import React, { Suspense } from "react";
import AppicationsStats from "./AppicationsStats";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../hooks/UseAuth";
import { myApplicationsPromise } from "../../api/ApplicationApi";



const MyApplication = () => {
    const {user} = UseAuth()
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl font-bold uppercase my-5">my application</h1>
      <AppicationsStats></AppicationsStats>
      <Suspense fallback={"loading your application"}>
        <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplication;
