
import { Link } from "react-router-dom";
import BmiCalculator from "../Components/BmiCalculator";
import Homeblogs from "../Components/Homeblogs";
import Contact from "../Components/Contact";




const Home = () => {



    return (
        <>
            <div
                className="relative bg-center bg-cover h-[600px] flex items-center justify-center"
                style={{ backgroundImage: 'url(https://i.ibb.co/tL2K761/your-image.jpg)' }}
            >
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 text-center text-white px-6 md:px-12">
                    <h1 className="text-5xl font-extrabold mb-6">Track Your Fitness Journey</h1>
                    <p className="text-lg mb-8 font-medium">Stay motivated and achieve your goals with ease.</p>
                    <Link to="/ourplan">
                        <button className="bg-cyan-400 text-[#1f2937] text-lg font-medium py-3 px-8 rounded-md transition duration-300 hover:bg-cyan-500">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>

            <div className="py-10 flex justify-between items-center">
                <h1 className="text-5xl font-bold">Calculate your<span className="text-cyan-500"> BMI </span>here</h1>
                <BmiCalculator />
            </div>


            <Homeblogs></Homeblogs>

            <div className="flex justify-center mb-10">
                <Link to="/blogs">
                    <button className="bg-cyan-500 text-white text-lg font-semibold py-2 px-5 rounded shadow hover:bg-cyan-600 transition duration-300">
                        More Blogs
                    </button>
                </Link>
            </div>

            <Contact></Contact>


           

        </>


    );
};

export default Home;


