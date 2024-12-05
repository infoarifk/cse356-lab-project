import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
          <div className="py-5 flex justify-between bg-cyan-300 px-3">
                <h4 className="text-3xl font-bold">FITNESS TRACKER</h4>

                <div>
                    <ul className="flex justify-center gap-10 font-medium py-2">
                    <Link to="/">Home</Link>
                        <li>Our Plans</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                <Link to="/registration"><button className="bg-rose-600 text-white py-2 px-4 rounded font-medium">Subscribe</button></Link>
                </div>



          </div>
        </>
    );
};

export default Navbar;