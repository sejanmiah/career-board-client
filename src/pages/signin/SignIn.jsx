import React, { use } from 'react';
import loginLottie from "../../assets/lotties/login.json";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {
    const {signinUser} = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/'

    console.log(location);

    const handleSignIn = e => {
        e.preventDefault()

        const form = e.target 

        const email = form.email.value
        const password = form.password.value
        console.log(email,password);

        // SignIn User
        signinUser(email,password)
        .then(result => {
            console.log(result.user);
            navigate(from)
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "200px" }}
            animationData={loginLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign In</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <input className="btn" type="submit" value="submit" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;