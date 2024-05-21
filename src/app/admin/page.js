"use client"
import { useState } from 'react';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/blogs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      alert('Blog added successfully!');
      setTitle('');
      setContent('');
    } else {
      alert('Failed to add blog.');
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='text-black'
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='text-black'
          />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}
