import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Postdetails = () => {
    // const params = useParams();
    const { postId } = useParams();
    const [postdetails, setPostDetails] = useState({});
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts/' + postId;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, [postId]);
    return (
        <div>
            {/* <h1>Post detials: {params.postId}</h1> Direct likhle aita use korbo */}
            <h1>Detials of Post- {postId}</h1>
            <div>
                <h2>Title: {postdetails.title}</h2>
                <h3>Body: {postdetails.body}</h3>
            </div>
        </div>
    );
};

export default Postdetails;