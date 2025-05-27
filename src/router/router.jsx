import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivetRoutes from "../Routes/PrivetRoutes";
import ApplyJob from "../pages/ApplyJob/ApplyJob";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/jobs/:id',
            Component: JobDetails,
            loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path: 'jobapply/:id',
            element: <PrivetRoutes><ApplyJob></ApplyJob> </PrivetRoutes>
        },
        {
            path: '/register',
            Component: Register
        },
        {
            path: '/signin',
            Component: SignIn
        }
        
    ]
  },
]);

export default router;