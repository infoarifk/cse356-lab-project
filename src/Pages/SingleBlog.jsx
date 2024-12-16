// SingleBlog.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch("/blogs.json");
                const data = await response.json();
                const singleBlog = data.find((b) => b.id === parseInt(id));
                setBlog(singleBlog);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="max-w-full mx-auto px-3 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">{blog.title}</h1>
            <img
                src={blog.header_image_url}
                alt={blog.title}
                className="w-full h-96 object-cover mb-8"
            />
            <div className="text-gray-700 text-lg">{blog.description}</div>
        </div>
    );
};

export default SingleBlog;
