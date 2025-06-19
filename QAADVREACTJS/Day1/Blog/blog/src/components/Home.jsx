import { useEffect, useState } from "react";
import Blogs from "./Blogs";

const Home = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [blogs, setBlogs] = useState(null);
    const url = "http://localhost:8000/blogs";

    useEffect(() => {
        fetch(url)
            .then((res) =>  res.json())
            .then((data) => setBlogs(data));
            }, [url]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
        setTitle('');
        setBody('');
        setAuthor('');
        window.location.reload(); //This will be replaced with a redirect
    });

    }
        return (
            <>
            <div className="home">
                {blogs && <Blogs blogs={blogs}  />}
            <h2 className="title">New Blog</h2><br />
            <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea><br /><br />
        <label>Blog author:</label>
        <input
            type="text"
           value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
          <br /><br />
        <button>Add Blog</button>
      </form>
      </div>
            </>
        );
}
export default Home;
