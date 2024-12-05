/* eslint-disable no-unused-vars */

import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';

const Login = () => {


    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) =>{

        e.preventDefault();
        const userEmail = e.target.userEmail.value;
        const userPassword = e.target.userPassword.value;

        loginUser(userEmail, userPassword)
        .then(result => {
            navigate(location?.state ? location.state : '/');
            
        })
        



    }


    return (
        <section className="py-10">
            <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto  lg:py-0">


                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Login to your account
                        </h1>




                        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="userEmail" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="your@mail.com" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="userPassword" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " required />
                            </div>


                            <button type="submit" className="text-black bg-cyan-300 hover:bg-cyan-400 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Login</button>


                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-900">
                                Do not have an account yet? <Link to="/registration" className="font-semibold text-rose-600">Registration</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;