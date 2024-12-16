import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Homeblogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("/blogs.json");
                const data = await response.json();
                setBlogs(data);
                setBlogs(data.slice(0, 4));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);


    const truncateDescription = (description) => {
        if (description.length > 100) {
            return `${description.substring(0, 300)}...`;
        }
        return description;
    };

    if (loading) {
        return <div>Loading...</div>;
    }



    return (
        <div className="max-w-full mx-auto px-3 py-8">
        <h1 className="text-5xl font-bold text-center mb-8">Our<span className="text-cyan-500"> Blogs</span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                        <div className="p-6 flex flex-col justify-around flex-1">
                            <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
                            <p className="text-gray-700 text-base mb-4">
                                {truncateDescription(blog.description)}
                                {blog.description.length > 100 && (
                                    <Link
                                        to={`/singleblog/${blog.id}`}
                                        className="text-cyan-500 font-semibold"
                                    >
                                        Read more
                                    </Link>
                                )}
                            </p>
                        </div>
                        <div className="w-full sm:w-1/3 p-6">
                            <img
                                src={blog.header_image_url}

                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Homeblogs;