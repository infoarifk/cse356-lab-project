

import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { updateProfile } from 'firebase/auth/cordova';
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from '../Providers/AuthProvider';



const Registration = () => {

    const { registerUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const HandleForm = (e)=>{

            e.preventDefault();
            const userName = e.target.userName.value;
            const userPhone = e.target.userPhone.value;
            const userEmail = e.target.userEmail.value;
            const userPassword = e.target.userPassword.value;

            registerUser(userEmail, userPassword)
            .then(result =>{

                console.log(result);
                
                navigate(location?.state ? location.state : '/' );
    
                updateProfile( auth.currentUser, {
                    displayName: userName,
                    phoneNumber: userPhone
                    
                })
              
            })
            

    }
  
 
    return (
        <section className="py-10">
            <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Registration Here
                        </h1>

                        <form onSubmit={HandleForm} >
                            <div className="grid gap-6 mb-6 grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" name="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No.</label>
                                    <input type="text" name="userPhone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your Phone No." required />
                                </div>
                            </div>
                            <div className="mb-6 w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" name="userEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="your@mail.com" required />
                            </div>

                            <div className="mb-6 w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="userPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="•••••••••" required />
                            </div>

                            <div className="flex items-start mb-6">
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? 
                                    <Link to="/login" className="text-rose-600 ml-1">Login</Link>
                                </label>
                            </div>
                            <button type="submit" className="text-black bg-cyan-300 hover:bg-cyan-400 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
