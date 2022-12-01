import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Posts.css'


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
                // posts.map(post => <Link to={'/posts/'+ post.id} >{post.id}  </Link>) * Ai link o kaj korbe *

                posts.map(post => <div className='dynamic-link' >
                    <NavLink
                        key={post.id}
                        to={`/posts/${post.id}`}
                    >{post.id}  </NavLink>
                </div>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;