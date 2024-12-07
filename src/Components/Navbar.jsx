import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
    const {user, logoutUser } = useContext(AuthContext);

    return (
        <>
          <div className="py-5 flex justify-between bg-cyan-300 px-3">
                <h4 className="text-3xl font-bold">FITNESS TRACKER</h4>

                <div>
                    <ul className="flex justify-center gap-10 font-medium py-2">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/ourplan">Our Plans</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>

                <div>
                    {
                        user && user.email ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div>
                                        
                                        <BsPersonCircle className="text-4xl"/>
                                    </div>
                                </div>
                                <ul
                                  tabIndex={0}
                                  className="menu menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-52 p-2 shadow">
                                  <li>
                                    <a className="justify-between">
                                      Profile
                                      
                                    </a>
                                  </li>
                                  <li><a>Settings</a></li>
                                  <li><a onClick={logoutUser}>Logout</a></li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/registration">
                                <button className="bg-[#1f2937] text-white py-2 px-4 rounded font-medium">Login | Register</button>
                            </Link>
                        )
                    }
                </div>
          </div>
        </>
    );
};

export default Navbar;
