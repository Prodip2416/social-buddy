import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Portal = () => {
    const [totalPost, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container >
                    <Typography component="div" >
                        {
                            totalPost.map(item => <Post key={item.id} post={item} showButton={true} />)
                        }
                    </Typography>
                </Container>
            </React.Fragment>         
        </div>
    );
};

export default Portal;