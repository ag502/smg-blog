import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { PostHeader, PostBody, PostFooter } from '@/components/postView';

function PostView() {
    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getPost = async () => {
            try {
                const result = await axios.get(`http://localhost:8000/post/${id}`);
                setPost(result.data);
            } catch (error) {
                alert('조회실패');
            }
        };
        getPost();
    }, []);

    return (
        <PostViewContainer>
            {post?.title && (
                <>
                    <PostHeader
                        title={post.title}
                        info={{ time: post.createdAt, author: post.userName }}
                        postId={id}
                    />
                    <PostBody content={post.content} />
                    <PostFooter comments={post.comments} />
                </>
            )}
        </PostViewContainer>
    );
}

const PostViewContainer = styled.div`
    width: 800px;
    margin: 100px auto 30px;
`;

export default PostView;
