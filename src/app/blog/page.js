"use client"
import { useEffect, useState } from 'react';

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="flex flex-wrap -m-4">
        {blogs.map(blog => (
          <div key={blog._id} className="p-4 md:w-1/3 w-full">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="leading-relaxed text-gray-700">{blog.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
