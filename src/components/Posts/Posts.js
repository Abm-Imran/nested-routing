import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h2>{posts.length}</h2>
            {
                // posts.map(post => <Link to={'/posts/'+ post.id} >{post.id}  </Link>)
                posts.map(post => <Link to={`/posts/${post.id}`} >{post.id}  </Link>)
            }
        </div>
    );
};

export default Posts;