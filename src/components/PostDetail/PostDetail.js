import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Post from '../Post/Post';


const PostDetail = () => {
    const { postId } = useParams();

    // Get and set The selected post by using id
    const [post, setPost] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);

    return (
        <div>
            <Post post={post} showButton={false}/>
            <h1>PostID: {postId}</h1>
            <Link to="/portal">
                <button> Back To Home Page</button>
            </Link>
        </div>
    );
};

export default PostDetail;